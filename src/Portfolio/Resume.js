import React from 'react'

const Resume = () => {
  return (
    <div className="section">
        <h2>Resume</h2>

<p>You can download my resume from the below link:</p> 
<a href="/Yash Resume.pdf"
  download
  style={{
          display: "inline-block",
          background: "#2563eb",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
          marginTop: "10px"}}
          >Download Resume
  </a>     
    </div>
  )
}

export default Resume
