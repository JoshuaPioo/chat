import React from 'react'
import { useAuthStore } from '../store/useAuthStore.js'

function ChatPage() {
  const { logout } = useAuthStore()   

  return (
    <div className="z-10">
      ChatPage
      <button 
        onClick={logout} 
        className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
      >
        Logout
      </button>
    </div>
  )
}

export default ChatPage
