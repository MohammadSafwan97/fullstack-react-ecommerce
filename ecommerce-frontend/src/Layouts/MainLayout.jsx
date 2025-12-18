import { Outlet } from "react-router";
import {Header} from "../Components/Header";
// import Footer from "../Components/Footer"; // optional

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}
