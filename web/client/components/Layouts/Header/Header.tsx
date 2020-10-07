import React, { useEffect, useState } from "react";
import Lee from "../../../lib/Lee";
import DelayLink from "../../../lib/DelayLink";
import Cookies from "js-cookie";

import "./Header.scss";

import HeaderUser from "./HeaderUser/HeaderUser";

const Header = () => {
  let [login, setLogin] = useState(false);

  useEffect(() => {
    if (Cookies.get("username") && Cookies.get("jwt")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });

  return (
    <div id="Header">
      <div className="header__area parents">
        <div className="header__area__contents parents">
          <DelayLink
            to=""
            delay={200}
            onDelayStart={function () {
              Lee.loadingStart();
            }}
          >
            <div className="header__area__contents__logo">
              국방프렌즈
              <img src="/static/icons/logo.png" alt="logo" />
            </div>
          </DelayLink>
          <ul className="header__area__contents__menus">
            <DelayLink
              to="#"
              delay={200}
              onDelayStart={function () {
                Lee.loadingStart();
              }}
            >
              <li>소개</li>
            </DelayLink>
            <DelayLink
              to="#"
              delay={200}
              onDelayStart={function () {
                Lee.loadingStart();
              }}
            >
              <li>상담 서비스</li>
            </DelayLink>
            <DelayLink
              to="#"
              delay={200}
              onDelayStart={function () {
                Lee.loadingStart();
              }}
            >
              <li>커뮤니티</li>
            </DelayLink>
            <DelayLink
              to="#"
              delay={200}
              onDelayStart={function () {
                Lee.loadingStart();
              }}
            >
              <li>카드뉴스</li>
            </DelayLink>
            <DelayLink
              to="#"
              delay={200}
              onDelayStart={function () {
                Lee.loadingStart();
              }}
            >
              <li>체계지원</li>
            </DelayLink>
          </ul>
          <ul className="header__area__contents__logins">
            {login ? (
              <HeaderUser />
            ) : (
              <>
                <li>로그인</li>
                <li>회원가입</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;