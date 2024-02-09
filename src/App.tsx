import { Outlet } from "react-router";

export default function App() {
  return (
    <main className="main">
      <div className="main__bg main__bg-left"></div>
      <div className="main__bg main__bg-right"></div>
      <Outlet />
    </main>
  );
}
