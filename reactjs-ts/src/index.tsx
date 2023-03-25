import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#D84AF7' //2374E1
          }
        }}
      >
        <App />
      </ConfigProvider>
    </React.StrictMode>
  </Provider>
)
