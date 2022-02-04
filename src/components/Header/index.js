import React, {useEffect, useState} from 'react';
import * as Style from './styles'

import {Link} from 'react-router-dom'
import api from '../../services/api'
import isConnected from '../../utils/isConnected'

import logo from '../../Assets/logo.png';
import bell from '../../Assets/bell.png'


function Header(props) {

  const [lateCount, setLateCount] = useState() //Armazena a quantidade de tarefas atrasadas

  async function lateVerify(){ //Verificar tarefas atrasadas e mostrar no sininho
    await api.get(`/task/filter/late/${isConnected}`)
              .then((response) => {
                setLateCount(response.data.length)
              })
  }

  useEffect(() => { //Vai executar a função dentro dela
    lateVerify()
  })

  async function Logout(){ //Sair da sincronização da aplicação web
    localStorage.removeItem('@todo/macaddress')
    window.location.reload()
  }

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

        { !isConnected ? //Senão estiver conectado vai aparecer a opção para sincronizar o celular
          <>
            <Link to='/qrcode'>SINCRONIZAR CELULAR</Link>
            <span className='dividir'/>
          </>
          : //Se tiver conectado, vai aparecer a opção de sair
          <>
            <button onClick={Logout}>SAIR</button>
            <span className='dividir'/>
          </>
        }

        {
          lateCount &&
          <>
            <button onClick={props.clickNotification} id='notification'>
              <img src={bell} alt="Notificação"/>
              <span>{lateCount}</span>
            </button>
          </>
        }

      </Style.RightSide>
      
    </Style.Container>
  )
}

export default Header;