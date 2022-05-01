import React from 'react'
//import ReactDOM from "react-dom";
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { createRoot } from 'react-dom/client'

function Indeksi() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    )
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Indeksi />)

/*ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);*/
