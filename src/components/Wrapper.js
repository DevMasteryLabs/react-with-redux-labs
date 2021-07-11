import React from "react"

const Wrapper = ({ children }) => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {children}
    </div>
  )
}

export default Wrapper