import React from 'react'
import { Routes , Route, BrowserRouter} from 'react-router-dom'
import Home from './Home/Home'
import Repositories from './Repositories/Repositories'

export default function Ola() {
  return (
      <BrowserRouter>
        <Routes >
            <Route path='/' element = {<Home/>}/>
            <Route path = '/repositories' element = {<Repositories/>}/>
        </Routes>
      </BrowserRouter>
  )
}

