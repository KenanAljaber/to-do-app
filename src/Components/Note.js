import Category from "./Category";
import editPhoto from "../assets/edit.png";
import deletePhoto from "../assets/delete.png";
import "../styles/note.css"
import { useState } from "react";

const Note = ({title,categoryColor,categoryName,date,setTask,task,index}) => {
    console.log(date);
    const [updateMood,setUpdateMood]=useState(false);
    function onDeleteItem (e){
        const temp=task.filter((item)=> item.title!=title);
        setTask(temp);
    }

    function onUpdate(){
        const temp=[...task];
        const item=temp.find((item)=>item.title===title);
        item.title=document.getElementById("updateInput").value;
        setTask(temp);
        setUpdateMood(!updateMood)

    }
   
    return ( 

        <div className="note">
            
         
            <div className="icons">
            <img src={editPhoto} onClick={()=>setUpdateMood(!updateMood)}/>
                <img src={deletePhoto} onClick={onDeleteItem}/>
                </div>
                {!updateMood?
                    <h1 className="note-title">{title}</h1>
                    :
                    <div>
                    <input type="text" id="updateInput" defaultValue={title}/>
                    <button className="update-btn" onClick={onUpdate}>update</button>
                    </div>
                
                }
               <div className="note-container" >
                
                <Category className="note-category" color={categoryColor} name={categoryName}/>
               
                <p className="note-date">{date}</p>
                </div>
            
                <div> 
                  
                
                </div>

                
            


        </div>

     );
}
 
export default Note;