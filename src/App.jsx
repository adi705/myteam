import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './pages/contact';
import Home from './pages/home';
import About from './pages/about';





const router = createBrowserRouter([
{
  path: '/',
  
  
  children: [

  {
    path: '/',
    element: <Home/>,
    
  },

  {
    path: '/about',
    element: <About/>,
    
  },

  {
    path: '/contact',
    element: <Contact/>,
    
   
  },

]}
  

]);



function App() {
  
  return <RouterProvider router={router}/>;
 
}

export default App
