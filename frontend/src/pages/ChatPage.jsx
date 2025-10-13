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
      <div className="relative w-full max-w-[1600px] md:h-[850px] h-[700px]">
        <BorderAnimatedContainer>
          {/* Main Container */}
          <div className="w-full h-full flex flex-col sm:flex-row bg-slate-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-800/70 shadow-[0_0_60px_-10px_rgba(56,189,248,0.5)]">

            {/* LEFT SIDEBAR - 40% width on larger screens */}
            <div className="flex flex-col bg-slate-900/80 border-b sm:border-b-0 sm:border-r border-slate-800/70 sm:flex-[0.4] flex-[1]">
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

            {/* RIGHT SIDE - 60% width on larger screens */}
            <div className="flex flex-col bg-gradient-to-br from-slate-950/80 to-slate-900/80 backdrop-blur-md sm:flex-[0.6] flex-[1] relative">
              {selectedUser ? (
                <div className="flex-1 flex flex-col">
                  {/* Header */}
                  <div className="h-16 border-b border-slate-800/70 flex items-center justify-between px-6 bg-slate-900/70 backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-cyan-400">
                      {selectedUser.fullname}
                    </h2>
                    <span className="text-sm text-slate-400">Active now</span>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
                    <ChatContainer />
                  </div>

                  {/* Input Box */}
                  <div className="h-20 border-t border-slate-800/70 bg-slate-900/70 px-6 flex items-center">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-slate-800/60 text-slate-100 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-slate-500"
                    />
                    <button className="ml-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_-5px_rgba(56,189,248,0.5)]">
                      Send
                    </button>
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
