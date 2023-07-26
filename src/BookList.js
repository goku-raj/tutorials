import Book from "./Book";
import React from "react";
import books from './books.json'

// const books = [
//   {
//     img: "https://m.media-amazon.com/images/I/81BgEsl0SJL._AC_UY436_QL65_.jpg",
//     title: "Master Your Emotions",
//     author: "Thibaut Meurisse",
//     price: "100",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UY436_QL65_.jpg",
//     title: "The Subtle Art of Not Giving A F*ck",
//     author: "Mark Manson",
//     price: "130",
//   },
// ];

// const book1 = {
//     img: "https://m.media-amazon.com/images/I/81BgEsl0SJL._AC_UY436_QL65_.jpg",
//     title: "Master Your Emotions",
//     author: "Thibaut Meurisse",
//     price: "100"
// };
// const book2 = {
//     img: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UY436_QL65_.jpg",
//     title: "The Subtle Art of Not Giving A F*ck",
//     author: "Mark Manson",
//     price: "130",
// };
const BookList = () => {
  return (
    <div>
      {/* <Book
        img={book1.img}
        title={book1.title}
        author={book1.author}
        price={book1.price}
      /> */}
      {books.map((ele) => {
        return (
          <Book
            img={ele.img}
            title={ele.title}
            author={ele.author}
            price={ele.price}
          />
        );
      })}

      {/* <Book
        img={book2.img}
        title={book2.title}
        author={book2.author}
        price={book2.price}
      /> */}
    </div>
  );
};

export default BookList;
