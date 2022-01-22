import React from 'react';
import * as Style from './styles';

//NOSSOS COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer';

function Home() {
  return (
    <Style.Container>
      <Header/>
      <Footer/>
    </Style.Container>
  )
}

export default Home;
