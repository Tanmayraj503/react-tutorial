import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Tech from './components/tech/tech.jsx'
import Contact from './components/contact/contact.jsx'
import { githubInfoLoader } from './components/github/github.jsx'
import Github from './components/github/github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='tech' element={<Tech />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>  
  ))    

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)