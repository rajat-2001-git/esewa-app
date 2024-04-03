import ProductList from "./Components/ProductList"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Success from "./Components/Success"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />}/>
          <Route path='/success' element={<Success />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
