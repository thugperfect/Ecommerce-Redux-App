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
  const [cart,setcart] = useState([])
  const [price,setPrice] = useState(0)



  const addToCart = (arg) =>{

   const prev =  cart.find(k => k.id === arg.id)
    if(!prev){
  setcart([...cart,arg])
  const p = Number(arg.price)

  setPrice(price+p)
}
   
    
  }

  useEffect(()=>{
    
    const fetchData =async () =>{
      await axios.get(`https://dummyjson.com/products/`)
      .then(res=>{
        const d = res.data
        setData(d)
      })
    }
    fetchData()
 
  },[])
  
  
  const filteredArr = search ?  data.products.filter(k=>(k.title.toLowerCase()).includes(search.toLowerCase())) : data.products
  
  const router =createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Header setSearch={setSearch}/>}>
      <Route index element={<Body data={filteredArr} addToCart={addToCart}/>}></Route>
     
      <Route path='/cart' element={<Cart data={cart} price={price}/>}></Route>
    </Route>
  ))
 
  return (
    <div className='w-full min-h-[100vh] bg-white dark:bg-zinc-900'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
