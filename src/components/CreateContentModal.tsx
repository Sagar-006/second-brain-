import { useRef, useState } from "react";
import Button from "./Button";
import { CrossIcon } from "./CrossIcon";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter"
}
export const CreateContentModal = ({ open, onClose }) => {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type,setType] = useState(ContentType.Youtube);

  async function addcontent(){
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    
    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      { title, link,type },
      {
        headers: {
          "Authorization": localStorage.getItem("token")
        },
      }
    );
    onClose();
    
  }
  return (
    <div className="">
      {open && (
        <div>
        <div className="w-screen h-screen  bg-slate-500 opacity-60 fixed top-0 left-0 flex justify-center">
        </div>

          <div className="flex justify-center fixed h-screen w-screen top-0 left-0 items-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div className=" flex flex-col gap-2">
                <Input ref={titleRef} placeholder={"Title"} />
                <Input ref={linkRef} placeholder={"Link"} />
              </div>
              <h2 className="text-center">Type</h2>
              <div className="flex gap-x-2 min-w-52 justify-center pt-2 ">
                <Button
                  text="Youtube"
                  variant={
                    type === ContentType.Youtube ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Youtube);
                  }}
                ></Button>
                <Button
                  text="Twitter"
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.Twitter);
                  }}
                ></Button>
              </div>
              <div className="flex justify-center pt-2">
                <Button onClick={addcontent} variant="primary" text="Submit" />
              </div>
            </span>
          </div>
        </div>
        
      )}
    </div>
  );
};
