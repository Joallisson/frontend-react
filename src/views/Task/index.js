import React, {useState, useEffect} from "react";
import * as Styles from './styles'

//IMPORTANDO A API
import api from '../../services/api'

//IMPORTANDO OS COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'

import iconCalendar from '../../Assets/calendar.png'
import iconClock from '../../Assets/clock.png'

function Task(){

    const [lateCount, setLateCount] = useState()
    const [type, setType] = useState()

    async function lateVerify(){
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then((response) => {
            setLateCount(response.data.length)
        })
    }

    useEffect(() => { 
        lateVerify()
    }, [])

    return(
        <Styles.Container>
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
                        <input type='text' placeholder="Título da Tarefa..."/>
                    </Styles.Input>

                    <Styles.TextArea>
                        <span>Detalhes</span>
                        <textarea rows={5} placeholder="Detalhes da terefa"/>
                    </Styles.TextArea>

                    <Styles.Input>
                        <span className="dataHora">Data</span>
                        <input type='date' placeholder="Título da Tarefa..."/>
                        <img src={iconCalendar} alt="Calendário"/>
                    </Styles.Input>

                    <Styles.Input>
                        <span className="dataHora">Hora</span>
                        <input type='time' placeholder="Título da Tarefa..."/>
                        <img src={iconClock} alt="Relógio"/>
                    </Styles.Input>

                    <Styles.Options>
                        <div>
                            <input type='checkbox'/>
                            <span>CONCLUÍDO</span>
                        </div>
                        <button>EXCLUIR</button>
                    </Styles.Options>

                    <Styles.Save>
                        <button>SALVAR</button>
                    </Styles.Save>

                </Styles.Form>

            <Footer/>
        </Styles.Container>
    )
}

export default Task