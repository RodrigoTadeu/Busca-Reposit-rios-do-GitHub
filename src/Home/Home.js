import React, { useState } from 'react'
import axios from 'axios'
import './styleHome.css'
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState ('')
  const [erro, setErro] = useState (false)

  const handlePesquisa = () => {
    axios.get (`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data
        const repositoriesName = []
        repositories.map ((repository) => {
          repositoriesName.push (repository.name)

        })

        localStorage.setItem ('repositoriesName' , JSON.stringify(repositoriesName))
        setErro(false)
        navigate('/repositories');
      })

      .catch (err => {
         setErro(true) 
      })
        
  }

  return (
    <div className='container'>
      <div className='content'>
        <input 
          type='text' 
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)} 
          className='input'
        />

        <button 
          type='button'
          onClick={handlePesquisa}
          className='button'
        >Pesquisar</button>
      </div>

       {erro ?  <div className='error'>Ocorreu um erro! Tente novamente.</div> : ''} 
    </div>
  )
}
