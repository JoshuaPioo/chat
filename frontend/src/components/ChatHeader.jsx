import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
//import { useEffect } from "react";
//import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  /*const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    // cleanup function
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);*/

  return (
    <div
      className="flex justify-between items-center bg-slate-800/50 border-b
   border-slate-700/50 max-h-[84px] px-6 flex-1"
    >
      <div className="flex items-center space-x-3">
        <div className={`avatar online`}>
          <div className="w-12 rounded-full">
            <img src={selectedUser.profilePic || "/profile.png"} alt={selectedUser.fullname} />
          </div>
        </div>

      
      </div>
    </div>
  );
}
export default ChatHeader;