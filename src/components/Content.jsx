import { useState } from "react";
import { SideBar } from "./Sidebar"
import { Tasks } from "./Tasks"


const Content = ()=>{
    const[selected,setSelectedTab] = useState("INBOX");
    return<div className="content">
        <SideBar selected={selected} setSelectedTab={setSelectedTab}/>
        <Tasks selected={selected} />
    </div>
}

    export  {Content};
