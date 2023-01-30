import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/message.svg";
import pen from "../../assets/pen.svg";
import blacklogo from "../../assets/stack-overflow.svg";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The overflow blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" srcset="" width="18px" />
          <p>
            Observality is key to the future of software (and your DevOps career)
          </p>
        </div>

        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" srcset="" width="18px" />
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </div>
      <h4>Feautred on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" srcset="" width="18px" />
          <p>Preview queue workflow - Find relaese...</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" srcset="" width="18px" />
          <p>Please welcome Valued Associate: #958- V2Biast #959 - SpencerO</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blacklogo} alt="pen" srcset="" width="18px" />
          <p>Outdated Answer: accepted answer is now unpinned on Stack Overflow</p>
        </div>
      </div>
      <h4>Hot Meta Post</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>Why was this spam flag declined, yet the question marked as spam</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>Why is the besy course of action when a user has high enough rep to..</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>Is a link to the "How to ask" help pages a useful contribute?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
