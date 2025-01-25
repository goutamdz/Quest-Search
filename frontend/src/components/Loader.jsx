import React from 'react'

function Loader() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-[60px] h-[60px] border-b-4 border-green-700 rounded-full animate-spin">
      </div>
    </div>
  )
}

export default Loader;