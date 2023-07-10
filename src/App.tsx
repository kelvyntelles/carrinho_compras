import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import GlobalStyle from './GlobalStyles'
import { Header } from './components/Header'
import { createContext, useState } from 'react'

type Product = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  qtd: number;
}

interface CartContextData {
  products: Product[];
  addProductCart: (id: number, title: string, price: number, imageUrl: string) => void;
  removeProductCart: (id: number) => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function App() {
  const [products, setProducts] = useState<Product[]>([])

  function addProductCart(id: number, title: string, price: number, imageUrl: string) {
    const qtdInicial = 1
    const data = {id: id, title: title, price: price, imageUrl: imageUrl, qtd: qtdInicial}

    setProducts([
      ...products,
      data
    ])
  }

  function removeProductCart(id: number) {
    const newProductsCart = products.filter(product => product.id !== id)
    setProducts(newProductsCart)
  }

  return (
    <CartContext.Provider value={{ products, addProductCart, removeProductCart }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </CartContext.Provider>
  )
}


