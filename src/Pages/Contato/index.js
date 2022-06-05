import React, {Component} from 'react';
import { View, Text, Button,StyleSheet, TouchableOpacity, TextInput, ScrollView  } from 'react-native';

//import Item from './src/Models/Item'
//import Database from './src/Database/Database'

// esse é contato

  export default class Contato extends Component {

    state = {
      mensagem: ""
    }
      render(){
        return( 
        <ScrollView>
        <View>
          <Text style={estilo.titulo}>Entre em Contato </Text>

          <TextInput placeholder='Digite o nome...'  />
          <TextInput placeholder='Digite o email... ' />
          <TextInput placeholder='Digite o telefone... ' />
          <TextInput placeholder='Digite a mensagem... ' />
          <TouchableOpacity style={estilo.botao} onPress={() => {this.setState({mensagem: 'SUCESSO!!!'})}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Enviar Mensagem</Text>
          </TouchableOpacity>

          <Text>{this.state.mensagem}</Text>
        </View>
        </ScrollView>


      );
    }
  }


  const estilo = StyleSheet.create({
    titulo: {
      fontSize: 18,
      margin: 5,
      color: 'black'
    },
    botao: {
      width: 150,
      backgroundColor: '#39bf00',
      alignItems: 'center',
      justifyContent: "center",
      padding: 10,
      
      margin: 5,
      color: 'white'
    },
    areaBotao: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center"
    },
    linha1: {
  
    }
  })