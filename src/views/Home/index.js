import React, {useState, useEffect, useMemo} from 'react';
import * as Style from './styles';

import { Link } from 'react-router-dom';

//IMPORTANDO API
import api from '../../services/api'

//NOSSOS COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {

  const [filterActived, setFilterActived] = useState('today')
  const [tasks, setTasks] = useState([])

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
  }, [filterActived])

  return (
    <Style.Container>
      
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
