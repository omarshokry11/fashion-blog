import React from "react";
import TopBar from "./Layout/Component/TopBar";
import Home from "./Layout/Page/Home";
import Footer from "./Layout/Component/Footer";

export default function App() {
  return (
    <div className="main-app-container">
        <TopBar />
        <Home />
        <Footer />
    </div>
  );
}
