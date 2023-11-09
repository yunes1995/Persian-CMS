import React from 'react'
import Sidebar from "./component/sidebar/Sidebar";
import "./Custom.css";
import Header from './component/Header/Header';
import "./App.css";

export default function App() {
  return (
    <>
      <Sidebar />

      <div className="main">
        <Header />
        {/* Router */}
      </div>
    </>
  );
}
