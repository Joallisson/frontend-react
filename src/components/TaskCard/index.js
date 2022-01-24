import React from 'react';
import * as Styles from './styles'

import iconDefault from '../../Assets/default.png'

function TaskCard(){
    return(
        <Styles.Container>
            <Styles.TopCard>
                <img src={iconDefault} alt="Ícone da tarefa"/>
                <h3>Título da Tarefa</h3>
            </Styles.TopCard>

            <Styles.BottomCard>
                <strong>25:01:2022</strong>
                <span>10:00</span>
            </Styles.BottomCard>
        </Styles.Container>
    )
}

export default TaskCard