import { Link, useLocation } from "react-router-dom";

const BottomNavBar = () => {
  const { pathname } = useLocation();
  return (
    <div className="fixed bottom-0 w-full bg-[#022213] py-4 h-[8vh] flex justify-around items-center">
      <Link
        to="/home"
        className={`text-white ${
          pathname === "/home" ? "bg-[#157f3d] px-5 py-2 rounded-2xl" : {}
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className=""
            color={pathname === "/home" ? "#fff" : "#e2f4b7"}
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <h3
            className={pathname === "/home" ? "text-[#fff]" : "text-[#e2f4b7]"}
          >
            Home
          </h3>
        </div>
      </Link>
      <Link
        to="/Announcements"
        className={`text-white ${
          pathname === "/announcements"
            ? "bg-[#157f3d] px-5 py-2 rounded-2xl"
            : {}
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className=""
            color={pathname === "/announcements" ? "#fff" : "#e2f4b7"}
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M12.707 2.293a1 1 0 0 0-1.414 0l-7 7l-2 2a1 1 0 1 0 1.414 1.414L4 12.414V19a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6.586l.293.293a1 1 0 0 0 1.414-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <h3
            className={
              pathname === "/announcements" ? "text-[#fff]" : "text-[#e2f4b7]"
            }
          >
            Announcements
          </h3>
        </div>
      </Link>
    </div>
  );
};
export default BottomNavBar;
