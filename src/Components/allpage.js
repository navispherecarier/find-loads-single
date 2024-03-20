import React from "react";
import './main.css';
import HomePage from "./HomePgae/homepage";
import Header from './Header/header';
import Footer from './Footer/footer';

function AllPage() {
  return (
    <div className="AllPage">
        <Header/>
        <HomePage />
        <Footer/>
    </div>
  );
}

export default AllPage;
