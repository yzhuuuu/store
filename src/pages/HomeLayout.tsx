import { Outlet } from "react-router-dom";
import Header from "@/components/Header.tsx";
import Navbar from "@/components/Navbar.tsx";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />

      <Outlet />
    </>
  );
}

export default HomeLayout;
