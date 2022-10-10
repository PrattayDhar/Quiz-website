import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Navbar from './component/Navbar/Navbar';

import Home from './component/Home/Home';
import Quizstatic from './component/Quizstatic/Quizstatic';
import Blog from './component/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/quizstatic', element: <Quizstatic></Quizstatic> },
        { path: '/blog', element: <Blog></Blog> }
    
      ]
    },
    {
      path:'*',element:'404 Error'
    }
   
  
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
