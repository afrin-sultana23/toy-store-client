
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Error from '../Layout/Error';
import Blog from '../pages/Home/Blog/Blog';
import AllToys from '../pages/allToys/AllToys';
import AddToys from '../pages/addToys/AddToys';
import MyToys from '../pages/myToys/MyToys';
import Login from '../User/Login';
import SignUp from '../User/SignUp';
import PrivateRoute from './PrivateRoute';
import SingleToy from '../pages/allToys/singleToy';
import Update from '../pages/Update/Update';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: 'addtoys',
                element: <PrivateRoute><AddToys /></PrivateRoute>
            },
            {
                path: 'mytoys',
                element: <PrivateRoute><MyToys /></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/toy')
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <SignUp></SignUp>
            },
            {
                path: 'singleToy/:id',
                element: <PrivateRoute><SingleToy /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: 'update/:id',
                element: <Update />,
                loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
            }
        ]
    }
])

export default Router;