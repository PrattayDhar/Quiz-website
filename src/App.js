import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Navbar from './component/Navbar/Navbar';

import Home from './component/Home/Home';
import Quizstatic from './component/Quizstatic/Quizstatic';
import Blog from './component/Blog/Blog';
import Qustion from './component/Qustion/Qustion';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> ,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
 },
        { path: 'quizstatic', element: <Quizstatic></Quizstatic> },
        { path: 'blog', element: <Blog></Blog> },
        {
          path: "quiz/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Qustion></Qustion>,
        }
    
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
