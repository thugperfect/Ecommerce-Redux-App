import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Cart from './components/Cart';
import { useState,useEffect } from 'react';
import axios from 'axios';
function App() {

  const [data,setData] = useState([])
  const [search,setSearch] = useState('')

  useEffect(()=>{

    const fetchData =async () =>{
      await axios.get('https://dummyjson.com/products')
      .then(res=>{
        const d = res.data
        setData(d)
      })
      
      

    }
    fetchData()
  },[])
  console.log(data);
  

  const router =createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Header setSearch={setSearch}/>}>
      <Route index element={<Body data={data}/>}></Route>
     
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))
  console.log(search)
  return (
    <div className='w-full min-h-[100vh] bg-zinc-900'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
