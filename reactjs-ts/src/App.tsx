import { FC } from 'react'
import './assets/styles/app.css'
import MainRoute from './routes/Main'
import { BrowserRouter } from 'react-router-dom'

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </>
  )
}

export default App
