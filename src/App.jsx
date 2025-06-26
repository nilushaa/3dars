import { useState } from "react";
import Image1 from "./assets/1984.jpg";
import Image2 from "./assets/great-gatsby.jpg";
import Image3 from "./assets/mockingbird.jpg";
import Image4 from "./assets/harry-potter.jpg";
import Image5 from "./assets/pride-and-prejudice.jpg";
import Image6 from "./assets/yashamoq-kitobi.jpg";
import Image7 from "./assets/porster-stop.jpg";
import Image8 from "./assets/OnePiece_1.jpg";
import Image9 from "./assets/Shingeki_no.jpg";
import Image10 from "./assets/berserk.png";
import Image11 from "./assets/Monster.jpg";
import Image12 from "./assets/6911073834.webp";
import Image13 from "./assets/Volume.png";
import Image14 from "./assets/Oʻtgan_kunlar.jpg";
import Image15 from "./assets/Mehrobdan.jpg";
import Image16 from "./assets/Qutlugʻ.jpg";
import Image17 from "./assets/halmad.jpg";
import Image18 from "./assets/odamiylik.jpg";
import Image19 from "./assets/guliston.jpg";
import Image20 from "./assets/koxna.webp";
import Image21 from "./assets/yulduz.jpg";
<input type="checkbox" value="synthwave" className="toggle theme-controller" />



function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      price: "$12.99",
      rating: "⭐4.9",
      author: "Harper Lee",
      year: 1960,
      image: Image3,
      description: "Irqchilik va adolat mavzularini yorituvchi Amerikadagi klassik roman. To Kill a Mockingbird"
    },
    {
      id: 2,
      title: "1984",
      price: "$10.99",
      rating: "⭐4.8",
      author: "George Orwell",
      year: 1949,
      image: Image1,
      description: "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes. 1984"
    },
    {
      id: 3,
      title: "The Great Gatsby",
      price: "$11.99",
      rating: "⭐4.7",
      author: "F. Scott Fitzgerald",
      year: 1925,
      image: Image2,
      description: "Amerika orzusi, boylik va muhabbat haqida zamonaviy tragik hikoya. The Great Gatsby"
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      price: "$9.99",
      rating: "⭐4.6",
      author: "Jane Austen",
      year: 1813,
      image: Image5,
      description: "Oila, ijtimoiy tabaqalanish va sevgi haqida ingliz romantik klassikasi. Pride and Prejudice"
    },
    {
      id: 5,
      title: "Harry Potter and the Sorcerer's Stone",
      price: "$14.99",
      rating: "⭐4.9",
      author: "J.K. Rowling",
      year: 1997,
      image: Image4,
      description: "Sehrli maktabda o‘qiydigan bolakay va uning sehrgar do‘stlari sarguzashtlari. Harry Potter and the Sorcerer's Stone"
    },
    {
      id: 6,
      title: "Yashamoq",
      price: "$8.99",
      rating: "⭐4.5",
      author: "Ko'z yoshlar",
      year: 1997,
      image: Image6,
      description: "Hayot mazmuni, insoniy azob va kuchli hissiyotlar bilan boy asar. Yashamoq"
    },
    {
      id: 7,
      title: "POSTER STOP",
      price: "$15.00",
      rating: "⭐4.3",
      author: "POSTER STOP",
      image: Image7,
      description: "Death Note mangasiga oid posteri – mashhur anime va manga seriyasi uchun. POSTER STOP"
    },
    {
      id: 8,
      title: "One Piece",
      price: "$13.50",
      rating: "⭐4.8",
      author: "«One Piece.»",
      image: Image8,
      description: "Dunyo bo‘ylab xazina izlayotgan qaroqchi Luffy va uning jamoasining epik sarguzashtlari. One Piece"
    },
    {
      id: 9,
      title: "Атака на титанов",
      price: "$13.99",
      rating: "⭐4.7",
      author: "«Атака на титанов»,",
      image: Image9,
      description: "Insoniyat gigant titanlarga qarshi kurashayotgan post-apokaliptik hikoya. Атака на титанов"
    },
    {
      id: 10,
      title: "📘 Berserk",
      price: "$16.00",
      rating: "⭐4.9",
      author: "Monthly Animal",
      image: Image10,
      description: "Guts ismli jangchining qorong‘i fantaziya dunyosidagi halokatli sarguzashtlari. 📘 Berserk"
    },
    {
      id: 11,
      title: "📘 Monster",
      price: "$14.00",
      rating: "⭐4.6",
      author: "Monster",
      image: Image11,
      description: "Bir shifokorning psixopat bemorini qutqarishi ortidan boshlangan ruhiy triller. 📘 Monster"
    },
    {
      id: 12,
      title: "📘 Vinland Saga",
      price: "$15.50",
      rating: "⭐4.7",
      author: "Saga",
      image: Image12,
      description: "Vikinglar hayoti, urush va kechirim haqida tarixiy manga. 📘 Vinland Saga"
    },
    {
      id: 13,
      title: "Case Closed",
      price: "$12.50",
      rating: "⭐4.5",
      author: "Detective Conan",
      image: Image13,
      description: "Yosh detektiv Conan Edogawa jinoyatlarni hal qiluvchi intellektual hikoya. Case Closed"
    },
    {
      id: 14,
      title: "Oʻtkan kunlar",
      price: "$10.00",
      rating: "⭐4.4",
      author: "1969-yil",
      image: Image14,
      description: "O‘zbek adabiyotidagi birinchi roman – muhabbat, jamiyat va islohotlar haqida. Oʻtkan kunlar"
    },
    {
      id: 15,
      title: "Mehrobdan chayon",
      price: "$11.00",
      rating: "⭐4.3",
      author: "1928-yil",
      image: Image15,
      description: "Diniy niqob ortidagi zo‘ravonlik va ijtimoiy zulm haqida tanqidiy roman. Mehrobdan chayon"
    },
    {
      id: 16,
      title: "Qutlugʻ qon",
      price: "$12.00",
      rating: "⭐4.5",
      author: "1943-yilda",
      image: Image16,
      description: "Amir Temur davri va tarixiy voqealarni aks ettiruvchi o‘zbek tarixiy asari. Qutlugʻ qon"
    },
    {
      id: 17,
      title: "Hamlet",
      price: "$9.50",
      rating: "⭐4.2",
      author: "1977-yil",
      image: Image17,
      description: "Xushchaqchaq va sho‘x bolakayning sarguzashtli va hazilomuz hayoti. „Shum bola“"
    },
    {
      id: 18,
      title: "Odamiylik Mulki",
      price: "$9.50",
      rating: "⭐4.2",
      author: "1977-yil",
      image: Image18,
      description: "Xushchaqchaq va sho‘x bolakayning sarguzashtli va hazilomuz hayoti. „Shum bola“"
    },
    {
      id: 19,
      title: "Guliston",
      price: "$9.50",
      rating: "⭐4.2",
      author: "1977-yil",
      image: Image19,
      description: "Xushchaqchaq va sho‘x bolakayning sarguzashtli va hazilomuz hayoti. „Shum bola“"
    },
    {
      id: 20,
      title: "Ko’xna dunyo",
      price: "$9.50",
      rating: "⭐4.2",
      author: "1977-yil",
      image: Image20,
      description: "Xushchaqchaq va sho‘x bolakayning sarguzashtli va hazilomuz hayoti. „Shum bola“"
    },
    {
      id: 21,
      title: "Yulduzlar mangu yonadi",
      price: "$9.50",
      rating: "⭐4.2",
      author: "1977-yil",
      image: Image21,
      description: "Xushchaqchaq va sho‘x bolakayning sarguzashtli va hazilomuz hayoti. „Shum bola“"
    },
  ]);

  return (
    <> 
 <div className="">
  <header className=" container pt-15 pb-10  leading-relaxed bg-purple-600  flex items-center justify-center">

        <ul class="centered-list">
        <span
              class="rounded-[50%] border-2 p-2 border-pink-300 text-pink-500"
              >&Nilush</span>
   
            <li>O'ZBEK KITOBLAR</li>
            <li>XITOY KITOBLAR</li>
            <li>INGLISH KITOBLAR</li>
            
            <label className="swap swap-flip text- 998xl">
  <input type="checkbox" />

  <div className="swap-on">🖤</div>
  <div className="swap-off">❤️</div>
</label>

  
         
          </ul>
        </header>
      <div className="container  hover:border-blue-500  ">
        


        <ul className="grid grid-cols-3 gap-10 pl-25 hover:bg-purple-200 ">
          {books.map((book) => {
            return (
       
              <div className="card bg-base-100 h-150 w-96 shadow-sm hover:bg-fuchsia-500 mt-20"  >
                <figure>
                <img width={300} src={book.image} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title  caret-purple-800">{book.title}</h2>
                  <h4 className=" text-left">{book.price}</h4>
                  <h4 className=" text-left">{book. author}</h4>
                 
                 
                  <h4 className=" text-left">{book.rating}</h4>
                  <h3 className=" caret-pink-600">{book.description}</h3>
                 
                  <div className="card-actions justify-end">
                  <button className="btn btn-dash btn-primary w-80 pl-20 pr-20 h-20">BUY NOOSh</button>
                  </div>
                 
                </div>
                
              </div>
              
            );
          })}
        </ul>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 mt-20">
  <aside className="grid-flow-col items-center">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>

  <div className="avatar">
  <div className="w-32 rounded">
    <img src="https://covers.openlibrary.org/b/id/10523338-L.jpg" alt="Book Cover 1" />
  </div>
</div>
<div className="avatar">
  <div className="w-32 rounded">
    <img src="https://covers.openlibrary.org/b/id/8228691-L.jpg" alt="The Alchemist" />
  </div>
</div>
<div className="avatar">
  <div className="w-20 rounded">
    <img
      src="https://covers.openlibrary.org/b/id/8228691-L.jpg"
      alt="The Alchemist"
    />
  </div>
</div>
<div className="avatar">
  <div className="w-16 rounded">
    <img
      src="https://covers.openlibrary.org/b/id/8228691-L.jpg"
      alt="The Alchemist"
    />
  </div>
</div>
<div className="avatar">
  <div className="w-8 rounded">
    <img
      src="https://covers.openlibrary.org/b/id/8228691-L.jpg"
      alt="The Alchemist"
    />
  </div>
</div>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>
</div>
      </div>
      
    </>
  );
}

export default App;
