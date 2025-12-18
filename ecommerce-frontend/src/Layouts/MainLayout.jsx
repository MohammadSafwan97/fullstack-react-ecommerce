import { Outlet } from "react-router";
import {Header} from "../components/Header";
// import Footer from "../components/Footer"; // optional

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
