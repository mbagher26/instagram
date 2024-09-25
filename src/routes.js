import Profile from "./pages/profile/Profile"
import Home from './components/home/Home'
import { Children } from "react"
import Posts from "./pages/posts/Posts"
import Reels from "./pages/reels/Reels"
import Tagged from "./pages/tagged/Tagged"
import Shop from "./pages/shop/Shop"


let routes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/shop', element: <Shop /> },

  {
    path: '/profile/*', element: <Profile />, children: [
      { path: 'posts', element: <Posts /> },
      { path: 'reels', element: <Reels /> },
      { path: 'tagged', element: <Tagged /> },

    ]
  },

]

export default routes