import axios from "axios";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { BACKEND_URL } from "../config";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { useContent } from "../hooks/useContent";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
  id: string;
  onDelete?: (id: number) => void;
}

interface dltProps {
  id?: string;
}
export function Card({ title, link, type, id, onDelete }: CardProps) {
    const {refresh} = useContent();
  
  // console.log(id)
   async function dlt() {
    refresh()
    console.log("hello jee")
    console.log(id)
      await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        data: {
          contentId: id,
        },
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      refresh()
  }

  return (
    <div className="">
      <div className="bg-white rounded-md p-4 min-h-44 min-w-72 border-gray-200 border max-w-72">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-1">
            <div className="text-gray-500">
              {type === "youtube" ? <YoutubeIcon /> : <TwitterIcon />}
            </div>
            <div>{title}</div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-500 cursor-pointer" onClick={() => dlt()}>
              <DeleteIcon />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
