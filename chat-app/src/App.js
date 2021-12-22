import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="8c2c6fbb-e8ea-456c-9ac8-43d1c0df36af"
        userName="Kop10"
        userSecret="123456"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};

export default App;
