const Book = ({ book, deleteBook }) => {
  return (
    <li
      key={book.id}
      className="card bg-base-100 h-150 w-100 shadow-sm mt-20  hover:scale-105 rounded-2xl  "
    >
      <figure className="mb-3">
        <img width={300} src={book.image} alt="" className="" />
      </figure>

      <h2 className="card-title pl-10 pr-10 mb-3 caret-purple-800">
        {book.title}
      </h2>
      <h4 className=" text-left pl-10 pr-10 mb-3">{book.price}</h4>
      <h4 className="text-red-500 text-left pl-10 pr-10 mb-3">{book.author}</h4>

      <h4 className=" text-yellow-400 text-left pl-10 pr-10 mb-3">
        {book.rating}
      </h4>
      <h3 className=" caret-pink-600pl-10 pr-10 mb-3    ">
        {book.description}
      </h3>

      <div className="flex items-center justify-between ml-10 mb-5">
        <button
          onClick={() => deleteBook(book.id)}
          className="btn btn-dash btn-primary btn-sm "
        >
          delete
        </button>
        <div>
          <button className="btn bg-emerald-400">&#43;</button>
          <span className="">0</span>
          <button className="btn mr-10 bg-red-400">&minus;</button>
        </div>
      </div>
    </li>
  );
};

export default Book;
