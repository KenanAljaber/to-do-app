import "../styles/category.css"

const Category = ({color,name}) => {
    const lineStyle={
        backgroundColor:color
    };

    return ( 
        <div className="category-container">
           
            <div className="category-line" style={lineStyle}/>
            <p className="category-name">{name}</p>

        </div>

     );
}
 
export default Category;