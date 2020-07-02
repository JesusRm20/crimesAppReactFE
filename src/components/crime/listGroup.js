import React, { Component } from 'react';

class ListGroup extends Component {
    render() { 
        const { allCategories, selectedCategory, onCategoryChange } = this.props;
        return ( 
            <ul className="list-group">
                 <li key="allCategories" ><button type='button' className={ selectedCategory === "allCategories" ? "list-group-item col-md-12 active" : "list-group-item col-md-12"} onClick={() => onCategoryChange("allCategories")}>{ "All Categories" }</button></li>
                {allCategories.map(out => (
                    
                     <li key={ out }><button type='button' className={ selectedCategory === out ? "list-group-item col-md-12 active" : "list-group-item col-md-12"} onClick={() => onCategoryChange(out)}>{ out }</button></li>
                    ) 
                )}
                
            </ul>
         );
    }
}
 
export default ListGroup;