import { Outlet, useNavigation } from "react-router-dom";
import Header from "@/components/Header.tsx";
import Navbar from "@/components/Navbar.tsx";
import Spinner from "@/components/Spinner.tsx";

function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />

      {isLoading ? <Spinner /> : <Outlet />}
    </>
  );
}

export default HomeLayout;
