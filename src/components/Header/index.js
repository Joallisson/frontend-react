import React from 'react';
import * as style from './styles'

import logo from '../../Assets/logo.png';
import bell from '../../Assets/bell.png'

function Header() {
  return (
    <style.Container>

      <style.LeftSide>
        <img src={logo} alt="Logo"/>
      </style.LeftSide>

      <style.RightSide>
        <a href='#'>INÍCIO</a>
        <span className='dividir'/>

        <a href='#'>NOVA TAREFA</a>
        <span className='dividir'/>
        
        <a href='#'>SINCRONIZAR CELULAR</a>
        <span className='dividir'/>

        <a href='#' id='notification'>
         <img src={bell} alt="Notificação"/>
         <span>5</span>
        </a>
      </style.RightSide>
      
    </style.Container>
  )
}

export default Header;