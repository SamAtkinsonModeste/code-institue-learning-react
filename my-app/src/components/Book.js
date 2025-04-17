import React from "react";

const Book = (props) => {
  const book = props.book;
  return (
    <div>
       <h3>{book.new}</h3>
      <h5>{book.title}</h5>
      <p>{book.author}</p>
      <p>{book.pages}</p>
     
    </div>
  );
};

export default Book;
