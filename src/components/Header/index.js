import React from 'react';
import * as Style from './styles'

import logo from '../../Assets/logo.png';
import bell from '../../Assets/bell.png'

function Header(props) {
  return (
    <Style.Container>

      <Style.LeftSide>
        <img src={logo} alt="Logo"/>
      </Style.LeftSide>

      <Style.RightSide>
        <a href='#'>INÍCIO</a>
        <span className='dividir'/>

        <a href='#'>NOVA TAREFA</a>
        <span className='dividir'/>
        
        <a href='#'>SINCRONIZAR CELULAR</a>
        <span className='dividir'/>

        <button onClick={props.clickNotification} id='notification'>
          <img src={bell} alt="Notificação"/>
          <span>{props.lateCount}</span>
        </button>
      </Style.RightSide>
      
    </Style.Container>
  )
}

export default Header;