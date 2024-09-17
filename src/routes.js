import Profile from "./pages/profile/Profile"
import Home from './components/home/Home'


let routes = [
          { path: '/', element: <Home /> },
          { path: '/home', element: <Home /> },
          { path: '/profile', element: <Profile /> },
]

export default routes