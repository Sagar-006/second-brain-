import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { Sidebaritem } from "./Sidebaritem"

export const Sidebar = () =>{
    return (
      <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="font-semibold text-2xl flex pt-4 items-center gap-x-2">
            <BrainIcon />
            Brainly
        </div>
        <div className="pt-4 ">
          <Sidebaritem text="twitter" icon={<TwitterIcon />} />
          <Sidebaritem text="youtube" icon={<YoutubeIcon />} />
        </div>
      </div>
    );
}