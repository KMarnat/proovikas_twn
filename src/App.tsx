import { Outlet } from "react-router";
import { Sidemenu } from "./components/Sidemenu/Sidemenu";

export default function App() {
  return (
    <>
      <Sidemenu />
      <main className="main">
        <div className="main__bg main__bg-left"></div>
        <div className="main__bg main__bg-right"></div>
        <Outlet />
      </main>
    </>
  );
}
