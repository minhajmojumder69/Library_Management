import { useEffect, useState } from "react";
import { baseUrl } from "../services/BaseUrl";
import BooksCard from "./BooksCard";

const FeatureBooks = () => {
    const [featureBook,setFeatureBook] = useState([])

    useEffect(()=>{
        fetch(`${baseUrl}/books/all`)
        .then(res => res.json())
        .then(data => setFeatureBook(data))
    },[])
    return (
        <div>
            <h1 className="font-bold text-5xl text-center m-auto py-6 mb-5">Our Featured Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-15">
                {
                    featureBook.slice(0,3).map(book=> <BooksCard book={book} key={book.id}/>)
                }
            </div>
        </div>
    );
};

export default FeatureBooks;