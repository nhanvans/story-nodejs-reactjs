import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './assets/styles/app.css'
import MainRoute from './routes'

const App: FC = () => {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  )
}

export default App
