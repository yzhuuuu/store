import { Outlet } from "react-router-dom";
import Header from "@/components/Header.tsx";
import Navbar from "@/components/Navbar.tsx";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className={"align-element"}>
        <Outlet />
      </main>
    </>
  );
}

export default HomeLayout;
