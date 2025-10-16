import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();

  return (
    <div
      className="absolute top-0 left-0 right-0 
      flex items-center justify-between 
      bg-slate-900/70 border-b border-slate-800/70 
      px-6 py-4 w-full z-10"
    >
      <div className="flex items-center space-x-3">
        <div className={`avatar online`}>
          <div className="w-12 rounded-full">
            <img
              src={selectedUser.profilePic || "/profile.png"}
              alt={selectedUser.fullname}
            />
          </div>
        </div>

        <div>
          <h3 className="text-slate-200 font-medium">
            {selectedUser.fullname}
          </h3>
          <p className="text-slate-400 text-sm">Online</p>
        </div>
      </div>

      <button onClick={() => setSelectedUser(null)}>
        <XIcon className="w-5 h-5 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer" />
      </button>
    </div>
  );
}

export default ChatHeader;
