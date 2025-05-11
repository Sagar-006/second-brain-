import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import Button from "../components/Button";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../icons/LogOut";


export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents,refresh} = useContent();
  const navigate = useNavigate();

  useEffect( () => {
    refresh()
  },[modalOpen])
  return (
    <div className="p-4 min-h-screen bg-gray-100 border-2">
      <Sidebar />
      <div className="ml-72">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon size="md" />}
          ></Button>
          <Button
          onClick={async() => {
           const response= await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
              share:true
            },{
              headers:{
                "Authorization":localStorage.getItem("token")
              }
            });
            const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
            navigator.clipboard.writeText(shareUrl)
            alert("Text copied!")
          }}
            variant="secondary"
            text="Share brain"
            startIcon={<ShareIcon />}
          ></Button>
          <Button
          onClick={()=> {
            localStorage.removeItem("token");
            navigate("/");
            
          }}
           text="LogOut" variant="primary" startIcon={<LogOut/>}/>
        </div>

        <div className="flex gap-4 flex-wrap pt-2">
          {contents.map(({ type, link, title,_id,}) => (
            <Card type={type} link={link} title={title} key={_id} id={_id} />
          ))}
        </div>

      </div>
    </div>
  );
}

