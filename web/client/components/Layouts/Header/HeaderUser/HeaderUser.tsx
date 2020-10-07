import React from "react";
import Lee from "../../../../lib/Lee";
import DelayLink from "../../../../lib/DelayLink";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Router from "next/router";
import { unsetToken } from "../../../../lib/auth";

const USER_QUERY = gql`
  query {
    me {
      user {
        username
        thumbnail {
          url
        }
        avatar
      }
    }
  }
`;

import "./HeaderUser.scss";

const HeaderUser = () => {
  let me;

  const { data, loading, error } = useQuery(USER_QUERY, {
    ssr: false,
  });

  if (loading) {
    return null;
  }

  if (error) {
    if (JSON.stringify(error.graphQLErrors[0].message) === '"Forbidden"') {
      return <p>권한이 없습니다.</p>;
    } else {
      return <p>Error: {JSON.stringify(error)}</p>;
    }
  }

  if (data) {
    me = data.me;
  }

  function logout() {
    unsetToken();
    Lee.loadingStart();

    setTimeout(() => {
      Router.push("/");
    }, 200);
  }

  return (
    <div id="HeaderUser">
      <div className="header-user__area">
        <div className="header-user__area__contents">
          <DelayLink
            to="mypage"
            delay={200}
            onDelayStart={function () {
              Lee.loadingStart();
            }}
          >
            <li>
              <div className="header-user__area__contents__thumbnail">
                {me.user.thumbnail ? (
                  <img
                    src={`https://osam2.kookbang.kr${me.user.thumbnail.url}`}
                    alt="thumbnail"
                  />
                ) : (
                  <img src={me.user.avatar} alt="thumbnail" />
                )}
              </div>
              <span>{me.user.username}님</span>
            </li>
          </DelayLink>
          <li onClick={logout}>로그아웃</li>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
