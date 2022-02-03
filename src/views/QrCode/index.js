import React, {useState} from 'react'
import * as Styles from './styles'
import Qr from 'react-qr-code'
import { useNavigate } from 'react-router-dom'

//Nossos componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function QrCode(){

    const [mac, setMac] = useState()
    const [redirect, setRedirect] = useState(false)//Se redirect for true, vai ser redirecionado pra outra página
    const navigate = useNavigate()

    async function saveMac(){ //Salvar o macaddress do Qrcode
        await localStorage.setItem('@todo/macaddress', mac) //Salva informações no navegador. O primeiro parâmetro é a chave e o segundo é o valor
        setRedirect(true) //Alterabdo o Valor de redirect
        window.location.reload() //Recarregar a página
    }

    return(
        <Styles.Container>
            <Header/>

            {redirect && navigate("/")}

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