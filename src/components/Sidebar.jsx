import {FaRegCalendar} from "react-icons/fa";
import {MdToday} from "react-icons/md";
import {BsFillInboxesFill} from "react-icons/bs";;




const SideBar = ({selectedTab,setSelectedTab})=>{
   return <div className="sidebar">
       <div className="active" onClick={()=> setSelectedTab("INBOX")}>
           <BsFillInboxesFill className="icon"/>
           Inbox
       </div>
       <div  onClick={()=> setSelectedTab("TODAY")}>
           <MdToday className="icon"/>
           Today
       </div>
       <div onClick={()=> setSelectedTab("NEXT_7")}>
           <FaRegCalendar className="icon"/>
           Next 7 days
       </div>
   </div>

}
export {SideBar}