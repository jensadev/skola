import { Link } from "react-router-dom";


function Webb() {
  const comments = "<!-- Kommentarer kan skrivas på två sätt. -->"

  return <div>
      <div dangerouslySetInnerHTML={{ __html: comments }} />
      
      Webbutveckling - <Link to="/finish">Finish</Link>
      </div>
}

export default Webb