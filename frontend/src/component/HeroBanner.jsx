import { Link } from "react-router";

const HeroBanner = () => {
  return (
    <div
      className="hero min-h-125"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1623771702313-39dc4f71d275?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">Ready to Discover Your Next Great Read?</h1>
          <p className="mb-5">
            Explore our digital library, discover your favorite books, and enjoy a seamless experience. Find books easily, keep track of your borrowings, and make your reading journey more convenient.
          </p>
          <Link to={'/browse_books'}><button className="btn btn-primary">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
