import React from 'react';
import {View, Text, ScrollView, StyleSheet,Image} from 'react-native'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Produto from '../../Components/Produto'

  function Home() {
      {/* 
        Removemos a centralização pois o componente "ScrollView" não possui um "centro" 
        Para usar a centralizar, sugiro inserir uma View dentro ScrollView e o conteúdo desejado dentro da View.

        Obs.: o componente Produto estava com um erro;
    */}
      return (
        <ScrollView >
        <View>
        <Header/>
        
            <Produto nome="Vestido" 
            preco="R$1.000,00" 
            descricao="Vestido confeccionado"
            imagem={require('../../Images/vestido.jpg')}
            />
            <Produto nome="Vestido2" 
                    preco="R$1.000,00" 
                    descricao="Vestido confeccionado"
                    imagem={require('../../Images/vestido1.jpg')}
            /> 
            <Produto nome="Vestido3" 
                    preco="R$1.000,00" 
                    descricao="Vestido confeccionado"
                    imagem={require('../../Images/vestido2.jpg')}
            />

        <Footer/>
        </View>
        </ScrollView>

      );
  }

  const style = StyleSheet.create({
    centralizar:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})

  export default Home;