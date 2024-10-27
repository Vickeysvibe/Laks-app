import BottomNavBar from "./components/BottomNavBar";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div className="h-[100vh] bg-[#022213]">
      <Header />
      <div className="rounded-3xl bg-[#022213] h-[84vh] px-2">{children}</div>
      <BottomNavBar />
    </div>
  );
};
export default Layout;
