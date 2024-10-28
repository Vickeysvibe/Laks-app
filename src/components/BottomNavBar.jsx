import { Link, useLocation } from "react-router-dom";

const BottomNavBar = () => {
  const { pathname } = useLocation();
  return (
    <div className="fixed bottom-0 w-full bg-[#022213] py-4 min-h-[8vh] flex justify-around items-center">
      <Link
        to="/home"
        className={`text-white ${
          pathname.includes("/home") ? "bg-[#157f3d] px-5 py-2 rounded-2xl" : {}
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
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className=""
            color={pathname === "/announcements" ? "#fff" : "#e2f4b7"}
          >
            <path
              fill="currentColor"
              d="M.584 2.223a.5.5 0 0 1 .693-.14l1.5 1.001a.5.5 0 0 1-.554.832l-1.5-1a.5.5 0 0 1-.139-.693M8 2a4.5 4.5 0 0 0-4.5 4.5v2.401l-.964 2.413A.5.5 0 0 0 3 12h3c0 1.108.892 2 2 2s2-.892 2-2h3a.5.5 0 0 0 .464-.685L12.5 8.9V6.5A4.5 4.5 0 0 0 8 2m1 10c0 .556-.444 1-1 1s-1-.444-1-1zM4.5 6.5a3.5 3.5 0 0 1 7 0v2.498a.5.5 0 0 0 .036.185L12.262 11H3.738l.726-1.817a.5.5 0 0 0 .036-.185zm10.223-4.416a.5.5 0 0 1 .554.832l-1.5 1a.5.5 0 0 1-.554-.832zM0 6.5A.5.5 0 0 1 .5 6H2a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5M15.5 6a.5.5 0 0 1 0 1H14a.5.5 0 0 1 0-1z"
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
      <Link
        to="/chat"
        className={`text-white ${
          pathname === "/chat" ? "bg-[#157f3d] px-5 py-2 rounded-2xl" : {}
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className=""
            color={pathname === "/chat" ? "#fff" : "#e2f4b7"}
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 21.25a9.25 9.25 0 1 0-8.307-5.177c.108.22.144.468.089.706l-.816 3.536a.6.6 0 0 0 .72.72l3.535-.817a1.06 1.06 0 0 1 .706.09A9.2 9.2 0 0 0 12 21.25M7.97 9.886h8.06m-8.06 4.228h5.748"
            />
          </svg>
          <h3
            className={pathname === "/chat" ? "text-[#fff]" : "text-[#e2f4b7]"}
          >
            Chat
          </h3>
        </div>
      </Link>
    </div>
  );
};
export default BottomNavBar;
