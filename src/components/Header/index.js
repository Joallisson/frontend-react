import React, {useEffect, useState} from 'react';
import * as Style from './styles'

import {Link} from 'react-router-dom'
import api from '../../services/api'

import logo from '../../Assets/logo.png';
import bell from '../../Assets/bell.png'


function Header(props) {

  const [lateCount, setLateCount] = useState() //Armazena a quantidade de tarefas atrasadas

  async function lateVerify(){ //Verificar tarefas atrasadas e mostrar no sininho
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
              .then((response) => {
                setLateCount(response.data.length)
              })
  }

  useEffect(() => { //Vai executar a função dentro dela
    lateVerify()
  })

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
        
        <Link to='/qrcode'>SINCRONIZAR CELULAR</Link>

        {
          lateCount &&
          <>
            <span className='dividir'/>
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