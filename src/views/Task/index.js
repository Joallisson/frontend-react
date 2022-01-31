import React, {useState, useEffect} from "react";
import * as Styles from './styles'
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";

//IMPORTANDO A API
import api from '../../services/api'

//IMPORTANDO OS COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'

import iconCalendar from '../../Assets/calendar.png'
import iconClock from '../../Assets/clock.png'

function Task({match}){

    //VARIÁVEIS DE ESTADOS DE UPDATE
    const [redirect, setRedirect] = useState(false)

    const {_id}= useParams() //Pegando a variável _id que está sendo passada pela url
    const navigate = useNavigate()

    const [lateCount, setLateCount] = useState()
    const [type, setType] = useState()

    //VARIÁVEIS DE ESTADOS DE CADASTRO
    const [id, setId] = useState()
    const [done, setDone] = useState(false)
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11')

    

    async function lateVerify(){ //Verificar Tarefas atrasadas
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then((response) => {
            setLateCount(response.data.length)
        })
    }

    async function LoadTaskDetails(){ //Carregar informações das tarefas assim que o usuário clicar nelas
        await api.get(`/task/${_id}`)
        .then(response => {
            setType(response.data.type)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
            setHour(format(new Date(response.data.when), 'HH:mm'))
        })
    }

    async function Save(){ //Salvar dados de cadastros ou de atualização
        if(_id){ //Se existir o parâmetro _id então vai atualizar uma tarefa
            await api.put(`/task/${_id}`, {
                macaddress,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => {
                setRedirect(true)
            })

        }else{ //Senão vai cadastrar
            await api.post('/task', {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => 
                setRedirect(true)
            )
        }
    }

    useEffect(() => {  //Carregar funções dentro do use effect
        lateVerify()
        LoadTaskDetails()
    }, [])

    return(
        <Styles.Container>
            {redirect && navigate("/")}
            <Header lateCount={lateCount}/>

                <Styles.Form>
                    <Styles.TypeIcons>
                    {
                        TypeIcons.map((icon, index) => (
                            index > 0 && //Se o index for maior que 0 retone um button
                            <button type="button" onClick={() => setType(index)}>
                                <img src={icon} alt="Tipo de Tarefa"
                                className={type && type != index && 'inative'}/>
                            </button>
                        ))
                    }
                    </Styles.TypeIcons>

                    <Styles.Input>
                        <span>Título</span>
                        <input type='text' 
                        placeholder="Título da Tarefa..."
                        onChange={(changed) => {setTitle(changed.target.value)}}
                        value={title}
                        />
                    </Styles.Input>

                    <Styles.TextArea>
                        <span>Descrição</span>
                        <textarea rows={5} 
                        placeholder="Detalhes da terefa"
                        onChange={(e) => {setDescription(e.target.value)}}
                        value={description}
                        />
                    </Styles.TextArea>

                    <Styles.Input>
                        <span className="dataHora">Data</span>
                        <input type='date' placeholder="Título da Tarefa..."
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        />
                        <img src={iconCalendar} alt="Calendário"/>
                    </Styles.Input>

                    <Styles.Input>
                        <span className="dataHora">Hora</span>
                        <input type='time' placeholder="Título da Tarefa..."
                        onChange={e => (setHour(e.target.value))}
                        value={hour}
                        />
                        <img src={iconClock} alt="Relógio"/>
                    </Styles.Input>

                    <Styles.Options>
                        <div>
                            <input type='checkbox' checked={done} onChange={() => (setDone(!done))}/>
                            <span>CONCLUÍDO</span>
                        </div>
                        <button>EXCLUIR</button>
                    </Styles.Options>

                    <Styles.Save>
                        <button onClick={Save}>SALVAR</button>
                    </Styles.Save>

                </Styles.Form>

            <Footer/>
        </Styles.Container>
    )
}

export default Task