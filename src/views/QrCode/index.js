import React, {useState, useEffect} from 'react'
import * as Styles from './styles'

//Nossos componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode(){
    return(
        <Styles.Container>
            <Header/>

            <Styles.Content>
                <h1>CAPTURE O QRCODE PELO CELULAR</h1>
                    <Styles.QrCodeArea>

                    </Styles.QrCodeArea>
                <p>Suas atividades serão sincronizadas com a do seu celular</p>
            </Styles.Content>

            <Footer/>
        </Styles.Container>
    )
}

export default QrCode