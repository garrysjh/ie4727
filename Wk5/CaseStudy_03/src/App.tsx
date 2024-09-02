import cookieLogo from './assets/cookie.png'
import './App.css'

import { Form } from './components/Form'

function App() {
  return (
    <>
      <div>
        <a href="https://sallysbakingaddiction.com/chewy-chocolate-chip-cookies/" target="_blank">
          <img src={cookieLogo} className="logo" alt="Cookie logo" />
        </a>
      </div>
      <h1>Hi, Nice to meet you!</h1>
      <div className="card">
        <Form/>
      </div>
    </>
  )
}

export default App
