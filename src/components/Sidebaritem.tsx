import { ReactElement } from "react";

interface SidebaritemProps {
    text:string;
    icon:ReactElement
} 
export const Sidebaritem = ({text,icon}:SidebaritemProps) => {
    return (
      <div className="flex  gap-x-2  text-gray-700 py-2 max-w-48 pl-2 transition-all duration-100 hover:bg-gray-200 cursor-pointer rounded min-w">
        <div className="pr-2 text-gray-300 ">{icon}</div>
        <div className="">{text}</div>
      </div>
    );
}