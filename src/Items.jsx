import React from "react";


function Items(props) {
    return (
        <div className="item">
            <div className="item-title">
                {props.name}
            </div>
            <div className="item-description">
                {props.description}
                <img src={props.url} alt=""></img>
            </div>
        </div>
    )
}
export default Items;