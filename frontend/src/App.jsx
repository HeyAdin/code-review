import { useState, useEffect } from 'react'
import './App.css'
import Editor from 'react-simple-code-editor'
import { Topbar } from './componets/Topbar'
import prism from "prismjs"
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "prismjs/themes/prism-tomorrow.css"


function App() {

  const [code, setCode] = useState(`function sum() {
  return a + b
 }`);

  const [review, setReview] = useState('')
  // useEffect(() => {
  //   prism.highlightAll()
  // },[review])

  async function reviewCode() {
    const response = await axios.post('https://code-review-kkl9.onrender.com/ai/get-review', { code });
    setReview(response.data)
  }

  return (
    <>
      <Topbar />
      <main className='main'>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }} />
          </div>
          <div className="button" onClick={reviewCode}>Review</div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>

            {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App
