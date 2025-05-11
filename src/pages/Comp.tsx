import axios from "axios"
import { BACKEND_URL } from "../config"
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Card } from "../components/Card";

export  function Comp () {
    const [data,setData] = useState([]);
    const name = useRef(null);
    const { shareLink } = useParams()
    async function shareId() {
       const response =  await axios.get(`${BACKEND_URL}/api/v1/brain/${shareLink}`);
       setData(response.data.content)
       name.current=response.data.username

    }
    
    useEffect(() => {
        shareId()
    },[shareLink])

    return (
      <div>
        <div>
          <h1 className="text-center text-2xl ">
            This Is {name.current}'s Second-brain
          </h1>
        </div>
        <div className="flex gap-x-2 pt-2">
          {data.map(({ type, link, title }) => {
            return <Card title={title} type={type} link={link} />;
          })}
        </div>
        
      </div>
    );
}

