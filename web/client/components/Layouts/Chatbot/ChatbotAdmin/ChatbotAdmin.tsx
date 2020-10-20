import React from "react";
import DelayLink from "../../../../lib/DelayLink";
import Lee from "../../../../lib/Lee";

import "./ChatbotAdmin.scss";

const ChatbotAdmin = (props) => {
  function closeChatbot() {
    const Chatbot = Lee.get("Chatbot");

    Lee.addClass(Chatbot, "hide");
    setTimeout(() => {
      Lee.addClass(Chatbot, "invisible");
    }, 200);
  }

  return (
    <div id="ChatbotAdmin">
      <div className="chatbot-admin__area">
        <div className="chatbot-admin__area__contents parents">
          <div className="chatbot-admin__area__contents__thumbnail">
            <img src="/static/icons/chat-bot.png" alt="chatbot" />
          </div>
          <div className="chatbot-admin__area__contents__text">
            <div className="chatbot-admin__area__contents__text__name">
              국방프렌즈
            </div>
            <div className="chatbot-admin__area__contents__text__paragraph">
              {props.reply}
              {props.button && props.link && (
                <DelayLink
                  to={props.link}
                  delay={200}
                  onDelayStart={function () {
                    Lee.loadingStart();
                    setTimeout(() => {
                      closeChatbot();
                    }, 100);
                  }}
                >
                  <div className="chatbot-admin__area__contents__text__button">
                    {props.button}
                  </div>
                </DelayLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotAdmin;