import React from "react";

function Items(props) {
    return (
        <div className="col col-lg-3 item">
            <div className="item-title">
                {props.name}
            </div>
            <div className="item-description">
                <p>{props.description}</p>
                <img src={props.url} alt=""></img>
            </div>
        </div>
    )
}
export default Items;
