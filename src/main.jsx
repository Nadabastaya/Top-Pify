import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import Welcome from './views/Welcome'
import TopSongs from './views/TopSongs'
import TopArtists from './views/TopArtists'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/welcome",
    element: <Welcome/>
  },
  {
    path: "/top-songs",
    element: <TopSongs/>
  },
  {
    path: "top-artists",
    element: <TopArtists />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={ store }>
      <RouterProvider router={ router } />
      {/* <App /> */}
    </Provider>,
)