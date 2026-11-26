import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { baseUrl } from "../services/BaseUrl";
import { AuthContext } from "../context/AuthProvider";

const BookDetails = () => {

    const {id} = useParams();
    const [bookDetails,setBookDetails] = useState(null)
    const {token} = useContext(AuthContext)

    const handleReserve = async ()=>{
        const res = await fetch(`${baseUrl}/reserve/${id}`,{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await res.json()
        console.log(data)
    }

    useEffect(()=>{
        if(!id) return
        fetch(`${baseUrl}/books/${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
        .then(res=> res.json())
        .then(data=> setBookDetails(data))

    },[id,token])

    console.log(bookDetails);

    return (
    <div className="bg-base-200 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="btn btn-ghost btn-sm mb-6">
          ← Back to Books
        </Link>

        <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden">
          {/* Book Cover or Fallback Placeholder */}
          <figure className="lg:w-1/3 bg-base-300 flex items-center justify-center min-h-80 p-6">
            {bookDetails?.cover_image ? (
              <img
                src={bookDetails?.cover_image}
                alt={bookDetails?.title}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-80 rounded-lg bg-neutral text-neutral-content flex flex-col items-center justify-center p-6 text-center shadow-inner">
                <span className="badge badge-outline mb-3">
                  {bookDetails?.category}
                </span>
                <h3 className="text-xl font-bold">{bookDetails?.title}</h3>
                <p className="text-sm opacity-75 mt-2">{bookDetails?.author}</p>
              </div>
            )}
          </figure>

          {/* Book Details */}
          <div className="card-body lg:w-2/3 justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="badge badge-primary badge-outline">
                  {bookDetails?.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold mt-2">{bookDetails?.title}</h1>
              <p className="text-base-content/70 text-lg mt-1">
                by <span className="font-medium">{bookDetails?.author}</span>
              </p>

              <p className="mt-5 text-base-content/80 leading-relaxed">
                {bookDetails?.description}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 p-4 bg-base-200 rounded-xl">
                <div>
                  <p className="text-xs uppercase opacity-60">Price</p>
                  <p className="text-xl font-bold">৳{bookDetails?.price}</p>
                </div>
                <div>
                  <p className="text-xs uppercase opacity-60">Availability</p>
                  <p className="text-lg font-semibold">
                    {bookDetails?.available_copies} / {bookDetails?.total_copies} copies
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase opacity-60">Added On</p>
                  <p className="text-sm font-medium mt-1">
                    {bookDetails?.created_at
                      ? new Date(bookDetails.created_at).toLocaleDateString()
                      : ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Reserve Action */}
            <div className="mt-6">
              <div className="card-actions justify-end">
                <button 
                    className="btn btn-primary w-full sm:w-auto px-8"
                    onClick={handleReserve}
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;