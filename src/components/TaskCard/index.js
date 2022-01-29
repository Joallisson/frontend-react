import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as Styles from './styles'

import typeIcons from '../../utils/typeIcons'

function TaskCard({type, title, when}){
    const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'))
    const hour = useMemo(() => format(new Date(when), 'HH:mm'))
    return(
        <Styles.Container>
            <Styles.TopCard>
                <img src={typeIcons[type]} alt="Ícone da tarefa"/>
                <h3>{title}</h3>
            </Styles.TopCard>

            <Styles.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </Styles.BottomCard>
        </Styles.Container>
    )
}

export default TaskCard