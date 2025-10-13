import { useState, useRef } from "react";
import { LogOutIcon, VolumeOffIcon, Volume2Icon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="p-6 border-b border-slate-700/50 bg-slate-900/40 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* AVATAR */}
          <div className="relative group">
            <button
              className="size-14 rounded-full overflow-hidden relative ring-2 ring-slate-700 group-hover:ring-cyan-500 transition-all duration-300"
              onClick={() => fileInputRef.current.click()}
            >
              <img
                src={selectedImg || authUser.profilePic || "/profile.png"}
                alt="User image"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-xs">Change</span>
              </div>
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* USER INFO */}
          <div>
            <h3 className="text-slate-200 font-semibold text-base max-w-[180px] truncate">
              {authUser.fullname}
            </h3>
            <p className="text-slate-400 text-xs">Online</p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          {/* SOUND TOGGLE */}
          <button
            className="p-2 rounded-lg hover:bg-slate-800 transition"
            onClick={() => {
              mouseClickSound.currentTime = 0;
              mouseClickSound
                .play()
                .catch((error) => console.log("Audio play failed:", error));
              toggleSound();
            }}
          >
            {isSoundEnabled ? (
              <Volume2Icon className="text-cyan-400 size-5" />
            ) : (
              <VolumeOffIcon className="text-slate-400 size-5" />
            )}
          </button>

          {/* LOGOUT */}
          <button
            className="p-2 rounded-lg hover:bg-red-600/30 transition"
            onClick={logout}
          >
            <LogOutIcon className="text-red-400 size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
