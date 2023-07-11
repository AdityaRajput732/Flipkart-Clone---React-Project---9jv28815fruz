import React,{useState,createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Checkout from './components/Checkout/Checkout'
import ProductDetails from './components/ProductPage/ProductDetails'
import RegisterPage from './components/Register/RegisterPage'

export const DetailContext = createContext();

function Router() {
 
  const[detail, setDetail] = useState([]);
  return (
    <>
    {/* <ProductDetails/> */}
    <DetailContext.Provider value={{detail, setDetail}} >

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/product/:idk' element={<ProductDetails />} />
    <Route path='/cart' element={<Checkout />} />
    <Route path='/register' element={<RegisterPage />} />
   </Routes>
   </BrowserRouter>
    </DetailContext.Provider>
    <div style={{display: "flex", textAlign: "center", padding: "5px 450px" }} className='footer'>
      <h3>Designed and developed by</h3> :--  <h2>Aditya Raj</h2>
      </div>
  
     
   </>
  )
}

export default Router