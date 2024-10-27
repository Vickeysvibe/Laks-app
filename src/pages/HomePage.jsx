// HomePage.js
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Welcome!</h1>
        <img
          src="/static/profile.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>

      <div className="p-6">
        <div className="bg-green-200 text-center py-6 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold">Next Garbage Collection</h2>
          <p className="text-lg mt-2">Tomorrow at 8:00 AM</p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <Link
            to="/event"
            className="bg-green-400 text-white py-2 rounded-md text-center hover:bg-green-500"
          >
            Register Event
          </Link>
          <Link
            to="/report"
            className="bg-green-400 text-white py-2 rounded-md text-center hover:bg-green-500"
          >
            Report Query
          </Link>
          <Link
            to="/chatbot"
            className="bg-green-400 text-white py-2 rounded-md text-center hover:bg-green-500"
          >
            Chatbot
          </Link>
        </div>
      </div>

      <div className="fixed bottom-0 w-full bg-green-500 py-4 flex justify-around">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/profile" className="text-white">
          Profile
        </Link>
        <Link to="/about" className="text-white">
          About
        </Link>
        <Link to="/announcements" className="text-white">
          Announcements
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
