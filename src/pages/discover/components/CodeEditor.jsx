// import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Editor } from "@monaco-editor/react";
import axios from "axios";
import { useState } from "react";

const CodeEditor = ()=>{
    const [selectedLanguage, setSelectedLanguage] = useState('javascript');
    const [selectedVersion, setSelectedVersion] = useState('18.15.0');
    const [code,setCode] = useState("console.log('hello world');");
    const [output,setoutput]=useState('');
    const [outputerrors,setoutputerrors]=useState('');
    const [executing,setexecuting] = useState(false);
    const [isFailed,setisFailed] = useState(false);
    
    const handleSelectChange = (value) => {
    setSelectedLanguage(value);
    const languageObject = languages.find(language=>language.language === value);
    setSelectedVersion(languageObject.version);
    };

    const executeCode = (language,version,code)=>{
    setoutput('');
    setoutputerrors('');
    setexecuting(true);
    axios.post('https://emkc.org/api/v2/piston/execute',
        {
            "language":language,
            "version":version,
            "files":[{"content":code}]
        }
    ).then(
        (res)=>{
            setoutput(res.data.run.stdout);
            setoutputerrors(res.data.run.stderr);
            setexecuting(false);
        }
    ).catch(
        (error)=>{
            setexecuting(false);
            if(error.response && error.response.status === 404){
                setisFailed(true);
            }
        }
    )
    };

    const languages = [
        { language: 'javascript', version: '18.15.0' }
    ];

    const handleChangeCode = (value)=>{
        setCode(value);
    };
    
    return(
        <div className="w-full h-full bg-neutral-50 rounded-xl flex flex-col justify-start items-center">
            <div className="w-full h-[65%] border-r p-4">
            <Select value={selectedLanguage} onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[180px] m-2">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                {languages.map(
                    (language)=> <SelectItem key={language.language} value={language.language}>{language.language}</SelectItem>
                )}
            </SelectContent>
            </Select>
            <Editor height="91%" theme="vs-light" onChange={handleChangeCode} defaultLanguage="javascript" defaultValue={code} />
            </div>
            <div className="w-full h-[30%] p-4">
                <Button variant={"dark"} className={"m-2 px-10"} onClick={()=>executeCode(selectedLanguage,selectedVersion,code)}>Run</Button>
                <div className="h-[80%] max-h-[88%] w-full border-1 bg-black border-gray-300 rounded-lg p-4 text-[12px] overflow-y-scroll">
                    {
                        executing?
                        <p className="text-white font-mono">...</p>
                        :
                        <>
                        <p className="text-white font-mono" style={{ whiteSpace: 'pre-line' }}>{output}</p>
                        <p className="text-red-500 font-mono">{outputerrors}</p>
                        {isFailed?<p className="text-yellow-400 font-mono">Couldn't Execute the code</p>:null}
                        </>
                    }
                    
                </div>

            </div>
            
        </div>
    )
}
export default CodeEditor;