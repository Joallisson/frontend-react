import React, {useState} from 'react'
import * as Styles from './styles'
import Qr from 'react-qr-code'

//Nossos componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode(){

    const [mac, setMac] = useState()

    async function saveMac(){ //Salvar o macaddress do Qrcode
        await localStorage.setItem('@todo/macaddress', mac) //Salva informações no navegador. O primeiro parâmetro é a chave e o segundo é o valor
    }

    return(
        <Styles.Container>
            <Header/>

            <Styles.Content>
                <h1>CAPTURE O QRCODE PELO CELULAR</h1>
                <p>Suas atividades serão sincronizadas com a do seu celular</p>

                    <Styles.QrCodeArea>
                        <Qr value='getmacaddress' size={350}/>
                    </Styles.QrCodeArea>

                    <Styles.ValidationCode>
                        <span>Digite a numeração que a apareceu no seu celular</span>
                        <input type='text' onChange={e => setMac(e.target.value)} value={mac}/>
                        <button onClick={saveMac}>SINCRONIZAR</button>
                    </Styles.ValidationCode>
                
            </Styles.Content>

            <Footer/>
        </Styles.Container>
    )
}

export default QrCode