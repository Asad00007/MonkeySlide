import { useState } from "react";
import MonkeyContext from "./MonkeyContext.jsx";

const MonkeyState = (props) => {
  const [toggleChatBox, setToggleChatBox] = useState(false);
  return (
    <MonkeyContext.Provider value={{ toggleChatBox, setToggleChatBox }}>
      {props.children}
    </MonkeyContext.Provider>
  );
};

export default MonkeyState;
