import React from 'react'
import { useChatStore } from '../store/useChatStore'

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore()

  return (
    <div className="flex items-center justify-center gap-3 bg-slate-800/40 rounded-xl mx-3 my-2 p-2 backdrop-blur-sm border border-slate-700/50">
      <button
        onClick={() => setActiveTab("chats")}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
          ${activeTab === "chats"
            ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
            : "text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10"}`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
          ${activeTab === "contacts"
            ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
            : "text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10"}`}
      >
        Contacts
      </button>
    </div>
  )
}

export default ActiveTabSwitch
