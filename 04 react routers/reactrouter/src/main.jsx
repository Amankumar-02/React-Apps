import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// router properties
import {Route,  RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
// router layout
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import About2 from './components/About2/About2.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import {GithubInfoLoader} from './components/GithubInfoLoader.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: '/contact',
//         element: <Contact />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>} >
          <Route path='aabout' element={<About2/>}/>
        </Route>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>

      <Route 
      loader={GithubInfoLoader}
      path='github' 
      element={<Github/>
      }/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
