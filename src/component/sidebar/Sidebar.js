import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsBagCheck, BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>

      <ul className="sidebar-links">
        <li>
          <Link to="products">
            <AiOutlineHome className="icon" />
            صفحه اصلی
          </Link>
        </li>
        <li className="active">
          <Link to="products">
            {/* <MdProductionQuLinkntityLimits className="icon" /> */}
            <BiCommentDetail className="icon" />
            محصولات
          </Link>
        </li>
        <li>
          <Link to="comment">
            <BiCommentDetail className="icon" />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to="user">
            <FiUsers className="icon" />
            کاربران
          </Link>
        </li>
        <li>
          <Link to="order">
              <BsBagCheck className="icon" />
              سفارشات
              </Link>
        </li>
        <li>
          <Link to="offers">
              <BsCurrencyDollar className="icon" />
              تخفیف ها
              </Link>
        </li>
      </ul>
    </div>
  );
}
