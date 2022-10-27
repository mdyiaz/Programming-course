import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from  './layout/Main';
import Courses from './component/Courses/Courses';
import FAQ from './component/FAQ/FAQ';
import Blog from './component/Blog/Blog';
import Register from './component/Register/Register';
import CartDetails from './component/CartDetails/CartDetails';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import CheckOut from './component/CheckOut/CheckOut';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:async () => {
            return fetch(`http://localhost:5000/courses`)
          },
          element:<Courses></Courses>
        },
        {
          path:'/courses',
          loader:async () => {
            return fetch(`http://localhost:5000/courses`)
          },
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
        },
        {
          path:'/login',
          element:<Login></Login>
        },

        {
          path: '/checkout',
          element:<CheckOut></CheckOut>,
          loader:async ({params}) => {
            return fetch(`http://localhost:5000/courses/$`)
          }
        },

       
        {
          path:'/courses/:id',
          element: <CartDetails></CartDetails>,
          loader:({params}) => {
            return fetch(`http://localhost:5000/courses/${params.id}`)
          },
        }
      ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }

  ])
  return (
    <div>
          <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
