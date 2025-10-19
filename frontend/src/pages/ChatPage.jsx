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
    <div className="min-h-screen flex items-center justify-center p-2 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="relative w-full max-w-[1100px] h-[685px]">
        <BorderAnimatedContainer>
          <div className="w-full h-full flex flex-row bg-slate-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-800/70 shadow-[0_0_30px_-10px_rgba(56,189,248,0.4)]">

            {/* LEFT SIDEBAR */}
            <div
              className={`flex flex-col bg-slate-900/80 border-r border-slate-800/70 
              w-[340px] flex-shrink-0 text-sm
              ${selectedUser ? "hidden sm:flex" : "flex"}`}
            >
              <div className="p-2 border-b border-slate-800/70">
                <ProfileHeader />
              </div>

              <div className="p-2 border-b border-slate-800/70">
                <ActiveTabSwitch />
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600 px-2 py-1 space-y-1.5">
                {activeTab === "chats" ? <ChatsLists /> : <ContactList />}
              </div>
            </div>

            {/* RIGHT SIDE (ChatContainer) */}
            <div
              className={`flex flex-col bg-gradient-to-br from-slate-950/80 to-slate-900/80 backdrop-blur-md 
              flex-grow text-sm relative
              ${!selectedUser ? "hidden sm:flex" : "flex"}
              ${selectedUser ? "w-[340px] sm:min-w-[500px]" : ""}`}
            >
              {selectedUser ? (
                <div className="flex-1 flex flex-col">

                  <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-thin scrollbar-thumb-slate-700">
                    <ChatContainer />
                  </div>
                </div>
              ) : (
                <div className="hidden sm:flex flex-1 items-center justify-center text-slate-400 text-xs">
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
