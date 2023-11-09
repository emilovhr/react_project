import ProductPage from './components/products/ProductPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/*" element={<ProductPage />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
