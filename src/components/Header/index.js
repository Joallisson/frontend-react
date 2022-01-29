import React from 'react';
import * as Style from './styles'

import {Link} from 'react-router-dom'

import logo from '../../Assets/logo.png';
import bell from '../../Assets/bell.png'

function Header(props) {
  return (
    <Style.Container>

      <Style.LeftSide>
        <img src={logo} alt="Logo"/>
      </Style.LeftSide>

      <Style.RightSide>
        <Link to='/'>INÍCIO</Link>
        <span className='dividir'/>

        <Link to='/task'>NOVA TAREFA</Link>
        <span className='dividir'/>
        
        <Link to='#'>SINCRONIZAR CELULAR</Link>
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