import {FaRegCalendar} from "react-icons/fa";
import {MdToday} from "react-icons/md";
import {BsFillInboxesFill} from "react-icons/bs";;




const SideBar = ({selected,setSelectedTab})=>{
   return <div className="sidebar">
       <div className={selected==="INBOX" ? 'active' : null} onClick={()=> setSelectedTab("INBOX")}>
           <BsFillInboxesFill className="icon"/>
           Inbox
       </div>
       <div className={selected==="TODAY" ? 'active' : null} onClick={()=> setSelectedTab("TODAY")}>
           <MdToday className="icon"/>
           Today
       </div>
       <div  className={selected==="NEXT_7" ? 'active' : null} onClick={()=> setSelectedTab("NEXT_7")}>
           <FaRegCalendar className="icon"/>
           Next 7 days
       </div>
   </div>

}
export {SideBar}