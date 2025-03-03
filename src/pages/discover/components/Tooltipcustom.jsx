import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
const Tooltipcustom = ({children,message})=>{
    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="w-full max-w-full">{children}</TooltipTrigger>
                <TooltipContent>
                <p>{message}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default Tooltipcustom;