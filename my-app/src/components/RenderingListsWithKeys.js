import React from "react";
import Book from "./Book";


const RenderingLists = () => {
  const bookList = [
    "to kill a mockingbird",
    "the great gatsby",
    "the catcher in the rye"
  ];

  const books = [
    {
      title: "to kill a mockingbird",
      author: "harper lee",
      pages: 281,
      new: "book component nested"
    },
    {
      title: "the great gatsby",
      author: "f. scott fitzgerald",
      pages: 218,
      new: "book component nested"
    },
    {
      title: "the catcher in the rye",
      author: "j. d. salinger",
      pages: 234,
      new: "book component nested"
    }
  ];

  return (
  <div>
    {
      bookList.map((book) => {
        return <h2 key={book}>{book}</h2>
      })
    }

    <hr/>
    {
      books.map((book) => {
        return (
          <div>
           <Book book={book} />
          </div>  
        )
      })
    }
  </div>
  );
};

export default RenderingLists;
