import { FC, useEffect, useState } from 'react'
import reactlogo from './assets/images/logo192.png'
import './assets/styles/app.css'
import './assets/styles/app.scss'
import Button from './components/button/Button'

const App: FC = () => {
  const [fullname, setFullname] = useState('Ho Văn Nhân')
  console.log(fullname)
  useEffect(() => {
    setFullname('Hồ Văn Nhân')
  }, [])
  return (
    <div className='container'>
      <img src={reactlogo} alt='React Logo' width={100} height={100} />
      <h1>{fullname}</h1>
      <h2>Bài viết được viết tại blog {process.env.HOST}</h2>
      <Button />
    </div>
  )
}

export default App
