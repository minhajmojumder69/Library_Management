
const BooksCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-md border border-base-200 hover:shadow-xl transition-all duration-300">

      <figure className="h-66 bg-base-200">
        <img
          src={book.cover_image || "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b3fe6157792089.59e4639237ae7.jpg"}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-4">

        <div className="flex justify-between items-center">
          <span className="badge badge-primary badge-outline badge-sm">
            {book.category}
          </span>
          <span className="text-xs text-gray-400">
            ID: {book.id}
          </span>
        </div>

        <h1 className="card-title font-bold">
          {book.title}
        </h1>

        <p className="text-sm text-gray-500">
          By {book.author}
        </p>

        <p className="text-sm text-gray-600 line-clamp-2">
          {book.description}
        </p>

        <div className="divider my-0"></div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="font-bold text-primary">
              ৳{book.price}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">Available Copies</p>
            <p className="font-semibold text-sm">
              {book.available_copies} / {book.total_copies}
            </p>
          </div>
        </div>

        <div className="mt-1">
          {book.available_copies > 0 ? (
            <span className="badge badge-success badge-outline badge-sm">
              Available
            </span>
          ) : (
            <span className="badge badge-error badge-outline badge-sm">
              Out of Stock
            </span>
          )}
        </div>

        <div className="card-actions mt-2">
          <button className="btn btn-primary btn-sm w-full">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default BooksCard;
