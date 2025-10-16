import React from "react";
import { useChatStore } from "../store/useChatStore.js";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer.jsx";
import ProfileHeader from "../components/ProfileHeader.jsx";
import ActiveTabSwitch from "../components/ActiveTabSwitch.jsx";
import ChatsLists from "../components/ChatsLists.jsx";
import ContactList from "../components/ContactList.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
import NoConversationPlaceHolder from "../components/NoConversationPlaceHolder.jsx";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
  <div className="relative w-full max-w-[1600px] h-[850px]">
    <BorderAnimatedContainer>
      {/* Main Container */}
      <div className="w-full h-full flex flex-col sm:flex-row bg-slate-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-800/70 shadow-[0_0_60px_-10px_rgba(56,189,248,0.5)]">

        {/* LEFT SIDEBAR */}
        <div className="flex flex-col bg-slate-900/80 border-b sm:border-b-0 sm:border-r border-slate-800/70 
                        w-full sm:w-[500px] flex-shrink-0">
          <div className="p-4 border-b border-slate-800/70">
            <ProfileHeader />
          </div>

          <div className="p-3 border-b border-slate-800/70">
            <ActiveTabSwitch />
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600 px-3 py-2 space-y-2">
            {activeTab === "chats" ? <ChatsLists /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col bg-gradient-to-br from-slate-950/80 to-slate-900/80 backdrop-blur-md 
                        flex-grow flex-shrink-0 min-w-[700px] relative">
          {selectedUser ? (
            <div className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
                <ChatContainer />
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400 text-lg">
              <NoConversationPlaceHolder />
            </div>
          )}
        </div>
      </div>
    </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default ChatPage;
