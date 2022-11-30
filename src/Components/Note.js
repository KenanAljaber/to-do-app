import Category from "./Category";
import "../styles/note.css"

const Note = ({title,categoryColor,categoryName,date}) => {
    return ( 

        <div>
            <div className="note-container">
                
               
             
                <Category className="note-category" color={categoryColor} name={categoryName}/>
                <h1 className="note-title">{title}</h1>
                <p className="note-date">{date}</p>
                
            </div>


        </div>

     );
}
 
export default Note;