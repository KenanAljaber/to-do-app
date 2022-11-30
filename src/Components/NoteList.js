import Note from "./Note";
import "../styles/noteList.css"
import { useState } from "react";
import Category from "./Category";
import deletePhoto from "../assets/delete.png";

const NoteList = () => {

    const [category, setCategory] = useState(undefined);
    const [showCategories, setShowCategories] = useState(true);
    const [categoriesList, setCategoriesList] = useState([{
        color: "#DDFFF7",
        name: "default"
    }]);
    const [tasks, setTasks] = useState([]);


    const handleDropdownList = () => {

        setShowCategories(!showCategories);
    }

    const addNote = () => {
        let taskBody = document.getElementById("noteTextInput").value;
        if (taskBody) {
            let task = {
                title: taskBody,
                category: {
                    name: categoriesList[0].name,
                    color: categoriesList[0].color
                }
            };
            if (category) {
               
                task.category.name = category.name;
                task.category.color = category.color;
            }
            setTasks(tasks => [...tasks, task]);
            document.getElementById("noteTextInput").value = "";

        } else {
            alert("plase type something to add a task!")
        }
   
    }

    const addCategory = () => {

        let color = document.getElementById("favcolor").value;
        let categoryName = document.getElementById("categoryTextInput").value;
        if (categoryName) {

            let newCategory = {
                name: categoryName,
                color: color
            };

            if (!categoryExist(newCategory)) {
                setCategoriesList(categoriesList => [...categoriesList, newCategory]);
            }
            document.getElementById("categoryTextInput").value = "";
        } else {
            alert("please type the name of the category!");

        }

    }

    const categoryExist = (catg) => {


        for (let i = 0; i < categoriesList.length; i++) {
            let current = categoriesList[i];
            if (current.name == catg.name && current.color == catg.color) {
                alert("Category already exits!");
                return true;

            }
            if (current.name == catg.name) {
                alert("Category name already exits!");
                return true;
            } if (current.color == catg.color) {
                alert("Category color already exits!");
                return true;

            }
        }
        return false;



    }


    return (

        <div className="noteList-container">
            <div className="noteList-head-container">


                <div className="noteList-add-note-contianer">
                    <input type="text" placeholder="Type your task.." className="noteList-add-note-input" id="noteTextInput" />
                    <div className="noteList-dropdown" onClick={handleDropdownList}>
                        <span> {!category ? "Choose a category" : <Category name={category.name} color={category.color} />}</span>
                        <div className="dropdown-content" style={{ display: showCategories ? "none" : "block" }}>
                            {
                                categoriesList.map(it => {
                                    let optionStyle = {
                                        backgroundColor: it.color,
                                        width: "8px",
                                        height: "30px",
                                    }

                                    return <p className="option" onClick={() => {
                                        setCategory(it);

                                    }}><div style={optionStyle} />{it.name}</p>
                                })

                            }
                        </div>
                    </div>
                    <button className="addNote-btn" onClick={addNote}>Create Task</button>
                </div>
                <div className="add-category-container">
                    <input type="text" placeholder="add a category..." className="noteList-add-category-input" id="categoryTextInput" />
                    <h6 className="selectColor-text">Select a color:</h6>
                    <input type="color" id="favcolor" className="selectColor" defaultValue="#462255" style={{ padding: "2px", margin: "3px" }} />
                    <button className="addNote-btn" onClick={addCategory}>Add Category</button>
                </div>
            </div>


            <h3>Your tasks!</h3>
            <div className="noteList-line-underH3" />
            {

                tasks.slice().reverse().map((it, index) => {
                    let title = it.title;
                    let color = it.category.color;
                    let categoryName = it.category.name;
                    let arr = new Date().toString().split(" ").splice(0, 4).reverse();
                    let dateString = arr.reduce((actual, accumlate) => {
                        accumlate = accumlate + " " + actual
                        return accumlate;
                    }, "");



                    return (
                        <div className="note-options">

                            <Note title={title} categoryColor={color} categoryName={categoryName} date={dateString} setTask={setTasks} task={tasks} index={index} />
                        </div>
                    );


                })
            }


        </div>
    );
}

export default NoteList;