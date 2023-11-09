import React from 'react'
import Sidebar from "./component/sidebar/Sidebar";
import "./Custom.css";
import Header from './component/Header/Header';
import "./App.css";
import { Route , Routes } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { route } from 'fontawesome';
import routs from './routs';



export default function App() {

  const router = useRoutes(routs)

  return (
    <>
      <Sidebar />

      <div className="main">
        <Header />
       {router}
      </div>
    </>
  );
}
