import React from "react";
import "./Book.css";

const Book = (props) => {
  return (
    <div className="book">
      <div className="bookImage">
        <img src={props.img} />
      </div>

      <div className="bookInfo">
        <h2>{props.title}</h2>
        <p className="bookAuthor">by {props.author} </p>
        <p className="bookPrice">$ {props.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Book;
