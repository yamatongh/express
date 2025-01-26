import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/test', {
        headers: {
          'Accept': 'application/json'
        }
      })
      setApiData(response.data)
    } catch (error) {
      console.error('API Error:', error)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={fetchData}>
          Fetch API Data
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {apiData && <p>API Response: {JSON.stringify(apiData)}</p>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App