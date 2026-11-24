import { useEffect, useState } from "react";
import { baseUrl } from "../services/BaseUrl";
import BooksCard from "../component/BooksCard";

const BrowseBooks = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
        fetch(`${baseUrl}/books/all`)
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
            {/* <h1 className="font-bold text-5xl text-center m-auto py-6 mb-5">Choose your Book..</h1> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-15 mt-15">
                {
                    books.map(book=> <BooksCard book={book}/>)
                }
            </div>
        </div>
    );
};

export default BrowseBooks;