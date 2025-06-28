import { useState } from "react";
import { SlHandbag } from "react-icons/sl";

const Book = ({ book, deleteBook }) => {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false); // Ko‘rsatish holati

  return (
    <li
      key={book.id}
      className="card bg-base-100 h-150 w-100 shadow-sm mt-20 hover:scale-105 rounded-2xl"
    >
      <figure className="mb-3">
        <img className="rounded-2xl" width={300} src={book.image} alt="" />
      </figure>

      <h2 className="card-title pl-10 pr-10 mb-3 caret-purple-800">
        {book.title}
      </h2>
      <h4 className="text-left pl-10 pr-10 mb-3">{book.price}</h4>
      <h4 className="text-red-500 text-left pl-10 pr-10 mb-3">{book.author}</h4>
      <h4 className="text-yellow-400 text-left pl-10 pr-10 mb-3">
        {book.rating}
      </h4>
      <h3 className="pl-10 pr-10 mb-3">{book.description}</h3>

      <div className="flex items-center justify-between px-5 mb-5">
        
        <button
          onClick={() => deleteBook(book.id)}
          className="btn btn-dash btn-primary btn-sm ml-4"
        >
          delete
        </button>


        <div className="flex items-center justify-end ml-">
          {!showCounter ? (
            <button
              onClick={() => setShowCounter(true)}
              className="btn btn-secondary btn-sm mr-4"
            >
       
              <SlHandbag className="text-sm ml-3 mr-3 mb-3 mt-3" />
            </button>
          ) : (
            <div className="flex items-center space-x-2 ml-auto">
              <button
                onClick={() => {
                  if (count < 20) {
                    setCount(count + 1);
                  }
                }}
                className="btn bg-emerald-400 text-white px-2"
              >
                +
              </button>
              <span className="text-lg font-semibold">{count}</span>
              <button
                onClick={() => {
                  if (count === 0) {
                    setShowCounter(false); 
                  } else {
                    setCount(count - 1);
                  }
                }}
                className="btn bg-red-400 text-white px-2"
              >
                −
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Book;
