import React from 'react'
import {LoaderIcon} from "lucide-react"

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
        <LoaderIcon className="size-10 animate-spin text-gray-300"/>
    </div>
  )
}

export default PageLoader