import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Contextprovider } from './Contextprovider.jsx'
import { AuthContextProvider } from './AuthContextProvider.jsx'
import { BrowserRouter,Link} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<App />

</BrowserRouter>

  

   
  
)
