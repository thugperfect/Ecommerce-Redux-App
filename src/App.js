import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Cart from './components/Cart';
function App() {

  const router =createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Header/>}>
      <Route index element={<Body/>}></Route>
     
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className='w-full min-h-[100vh] bg-zinc-900'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
