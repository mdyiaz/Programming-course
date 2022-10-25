import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from  './layout/Main';
import Courses from './component/Courses/Courses';
import FAQ from './component/FAQ/FAQ';
import Blog from './component/Blog/Blog';
import Register from './component/Register/Register';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element:<Main></Main>,
      children:[
        {
          path:'/courses',
          element:<Courses></Courses>
        },
        {
          path:'/faq',
          element:<FAQ></FAQ>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    }

  ])
  return (
    <div>
          <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
