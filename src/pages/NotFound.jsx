import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        
        <h1 className="text-7xl md:text-9xl font-bold text-purple-800">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition"
        >
          Go Back Home
        </Link>

      </div>
    </section>
  );
};

export default NotFound;
