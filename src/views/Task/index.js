import React, {useState, useEffect} from "react";
import * as Styles from './styles'

//IMPORTANDO A API
import api from '../../services/api'

//IMPORTANDO OS COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TypeIcons from '../../utils/typeIcons'

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
                        <input type='text' placeholder="Título da Tarefa..."></input>
                    </Styles.Input>

                </Styles.Form>

            <Footer/>
        </Styles.Container>
    )
}

export default Task