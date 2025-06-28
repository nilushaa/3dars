import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";

const Book = ({ book, deleteBook }) => {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [liked, setLiked] = useState(false);

  const btnStyle =
    "btn btn-xs bg-white text-purple-900 border border-purple-900 hover:bg-purple-700 hover:text-white transition-colors rounded-sm h-8 px-3";

  return (
    <li
      key={book.id}
      className="card bg-base-100 h-170 w-90 shadow-sm mt-20 hover:scale-105 rounded-2xl "
    >
      <figure className="relative mb-3">
        <img
          className="rounded-2xl w-full h-auto"
          src={book.image}
          alt={book.title}
        />
        <div
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform"
        >
          {liked ? (
            <TiHeartFullOutline className="text-red-500 text-2xl" />
          ) : (
            <TiHeartOutline className="text-red-500 text-2xl" />
          )}
        </div>
      </figure>

      <h2 className="card-title pl-10 pr-10 mb-3 caret-purple-800">{book.title}</h2>
      <h4 className="text-left pl-10 pr-10 mb-3">{book.price}</h4>
      <h4 className="text-red-500 text-left pl-10 pr-10 mb-3">{book.author}</h4>
      <h4 className="text-yellow-400 text-left pl-10 pr-10 mb-3">{book.rating}</h4>
      <h3 className="pl-10 pr-10 mb-3">{book.description}</h3>

      <div className="flex items-center justify-between px-5 mb-5  ml-8">
        <button onClick={() => deleteBook(book.id)} className={btnStyle}>
          delete
        </button>

        <div className="flex items-center justify-end space-x-4 mr-8">
          {!showCounter ? (
            <button onClick={() => setShowCounter(true)} className= {btnStyle}>
              <AiOutlineShoppingCart className="text-purple-900 text-xl ml-1 mr-1" />
            </button>
          ) : (
            <div className="flex items-center space-x-2 ml-auto">
              <button
                onClick={() => {
                  if (count < 20) setCount(count + 1);
                }}
                className="btn btn-xs bg-green-500 text-white rounded-sm h-8 px-3 hover:bg-green-700 transition-colors"
              >
                +
              </button>
              <span className="text-base font-semibold">{count}</span>
              <button
                onClick={() => {
                  if (count === 0) {
                    setShowCounter(false);
                  } else {
                    setCount(count - 1);
                  }
                }}
                className="btn btn-xs bg-red-500 text-white rounded-sm h-8 px-3 hover:bg-red-700 transition-colors"
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
