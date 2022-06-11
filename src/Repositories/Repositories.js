import React, {useEffect, useState} from 'react'
import './styleRep.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Repositories() {
  const navegate = useNavigate() 
  const [ repositories, setRepositories ] = useState ([])
  useEffect (() => {
      let repositoriesName = localStorage.getItem('repositoriesName')
      if(repositoriesName != null) {
        repositoriesName = JSON.parse(repositoriesName)
        setRepositories(repositoriesName)
        
      } else {
        navegate.push('/')
      }
      
  }, [])
  return (
    <div>
        <div className='div'>
          <div className='h1'>Repositórios</div> <br/>
            <div className='ul'>
              {repositories.map ((repository) => {
                  return (
                    <div className='li' key={repository}>
                       Repositório: {repository} 
                    </div>
              )})}
            </div>
            <Link className='link' to='/'>Voltar</Link>
        </div>
    </div>
  )
}
