import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home'
import Books from './Books'
import Editbook from './Editbook'
import Editauthor from './Editauthor'
import Addbook from './Addbook'
import Authors from './Authors'
import { BooksProvider } from './BookContext'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <BooksProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />

          <Route path="books/edit" element={<Editbook />}></Route>
          <Route path="/addbook" element={<Addbook />}></Route>
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/edit" element={<Editauthor />} />
        </Routes>
      </BrowserRouter>
    </BooksProvider>
  )
}

export default App