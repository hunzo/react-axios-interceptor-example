import axios from 'axios'
import React, { useEffect } from 'react'
import './App.css'
import { setupInterceptorsTo } from './services/Api'

const App: React.FC = () => {
  const myAxios = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
  })
  const Api = setupInterceptorsTo(myAxios)

  useEffect(() => {
    Api.get('/posts')
      .then((rs) => {
        console.log(rs.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [Api])

  return (
    <div className="App">
      <h1>Axios Interceptors Example</h1>
    </div>
  )
}

export default App
