import React from "react";
import * as Styles from './styles'

import filter from '../../Assets/filter.png'

function FilterCard({title, actived}){
    return(
        <Styles.Container actived={actived}>
            <img src={filter} alt="Filtro"/>
            <span>{title}</span>
        </Styles.Container>
    )
}

export default FilterCard;