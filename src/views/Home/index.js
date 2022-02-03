import React, {useState, useEffect, useMemo} from 'react';
import * as Style from './styles';

import { Link, useNavigate } from 'react-router-dom';

//IMPORTANDO API
import api from '../../services/api'

import isConnected from '../../utils/isConnected';

//NOSSOS COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {

  const [filterActived, setFilterActived] = useState('today') //Filtro escolhido por padrão
  const [tasks, setTasks] = useState([])
  const [redirect, setRedirect] = useState(false) //Por padrão essa variável vai ser falsa, mas quando conectar no QrCode vai ser verdadeira e vai redirecionar pra página home

  const navigate = useNavigate()

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
              .then(({data}) => {
                setTasks(data)
              })
  }

  function Notification(){
    return setFilterActived('late')
  }

  useEffect(() => {
    loadTasks()
    if (!isConnected) { //Senão estiver conectado, então vai ser redirecionado
      setRedirect(true)
    }
  }, [filterActived])

  return (
    <Style.Container>
      
      {redirect && navigate("/qrcode")}

      <Header clickNotification={Notification}/>

        <Style.FilterArea>
          <button type='button'        onClick={() => setFilterActived('all')}>
            <FilterCard title='Todos'  actived={filterActived === 'all'}/>
          </button>

          <button type='button'        onClick={() => setFilterActived('today')}>
            <FilterCard title='Hoje'   actived={filterActived === 'today'}/>
          </button>

          <button type='button'        onClick={() => setFilterActived('week')}>
            <FilterCard title='Semana' actived={filterActived === 'week'}/>
          </button>

          <button type='button'        onClick={() => setFilterActived('month')}>
            <FilterCard title='Mês'    actived={filterActived === 'month'}/>
          </button>

          <button type='button'        onClick={() => setFilterActived('year')}>
            <FilterCard title='Ano'    actived={filterActived === 'year'}/>
          </button>

        </Style.FilterArea>

        <Style.Title>
          <h3>{filterActived === 'late'? "Tarefas Atrasadas" : "TAREFAS"}</h3>
        </Style.Title>

        <Style.Content>
          {
            tasks.map((item) => 
              (
                <Link to={`/task/${item._id}`}>
                  <TaskCard type={item.type} title={item.title} when={item.when} done={item.done}/>
                </Link>    
              )
            )}
        </Style.Content>
      
      <Footer/>
    </Style.Container>
  )
}

export default Home;
