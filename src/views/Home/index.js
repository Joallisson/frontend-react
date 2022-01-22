import React from 'react';
import * as Style from './styles';

//NOSSOS COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';

function Home() {
  return (
    <Style.Container>
      <Header/>

      <FilterCard/>
      
      <Footer/>
    </Style.Container>
  )
}

export default Home;
