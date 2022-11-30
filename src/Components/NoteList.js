import Note from "./Note";
import "../styles/noteList.css"
import { useState } from "react";
import Category from "./Category";

const NoteList = () => {

const [category,setCategory]=useState();
const [showCategories,setShowCategories]=useState(true);

    const categories = [{
        color: "red",
        name: "secret"
    }];
    const myNotes = [{
        title: "Clean the dishes",
        category: {
            color: "red",
            name: "Important"
        }
    },{
        title: "Clean the dishes",
        category: {
            color: "red",
            name: "Important"
        }
    },{
        title: "Clean the dishes",
        category: {
            color: "red",
            name: "Important"
        }
    },{
        title: "Clean the dishes",
        category: {
            color: "red",
            name: "Important"
        }
    },{
        title: "Clean the dishes",
        category: {
            color: "red",
            name: "Important"
        }
    },{
        title: "Clean the dishes",
        category: {
            color: "red",
            name: "Important"
        }
    },{
        title: "Clean the dishes",
        category: {
            color: "red",
            name: "Important"
        }
    }];

    

    const handleDropdownList = () => {
               if(categories.length>0)
            setShowCategories(!showCategories);
    }

    const handleSelectCategory=(category)=>{
        setCategory(category);
    }

    return (

        <div className="noteList-container">
            <div className="noteList-head-container">

               
                <div className="noteList-add-note-contianer">
                <input type="text" placeholder="Type your task.." className="noteList-add-note-input" id="noteTextInput" />
                <div className="noteList-dropdown" onClick={handleDropdownList}>
                    <span> {!category? "Choose a category": <Category color={category.color} name={category.name}/>}</span>
                    <div className="dropdown-content" style={{display: showCategories ? "none":"block" }}>
                {
                    categories.map(it=>{
                        let optionStyle={
                            backgroundColor:it.color,
                            width:"5px",
                            height:"10px",
                        }

                        return <p className="option" onClick={(it)=>{
                            handleSelectCategory(it);

                        }}><div style={optionStyle}/>{it.name}</p>
                    })

                }
                </div>
               </div>
               <button className="addNote-btn" >Create Task</button>
               </div>
               <div className="add-category-container">
            <input type="text" placeholder="add a category..." className="noteList-add-category-input" id="categoryTextInput" />
            <input type="color" id="favcolor" name="favcolor" defaultValue="#93E1D8" style={{padding:"2px",margin:"3px"}}/>
                <button className="addNote-btn" >Add Category</button>
            </div>
            </div>
            

            <h3>Your tasks!</h3>
            {

                myNotes.map((it) => {
                    let title=it.title;
                    let color=it.category.color;
                    let categoryName=it.category.name;
                    let arr=new Date().toString().split(" ").splice(0,4).reverse();
                    let dateString= arr.reduce((actual,accumlate)=>{
                        accumlate=accumlate+" "+actual
                    return accumlate;},"");
                    
                  
                    
                    return(
                        
                    <Note title={title} categoryColor={color} categoryName={categoryName} date={dateString}/>
                    );
                    
                  
                })
            }
       

        </div>
    );
}

export default NoteList;