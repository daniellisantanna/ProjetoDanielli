import React, {Component} from 'react'
import {View, Text, ScrollView, StyleSheet,Images} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

 /* Importamos nossas páginas criadas para inserir dentro da navegação */
 import Home from './src/Pages/Home';
 import About from './src/Pages/About';
 import Contato from './src/Pages/Contato';
 import Camera from './src/Pages/Camera';

 /* Criamos nosso navegador com a variavel Drawer */
 const Drawer = createDrawerNavigator();

/* 
  Movi o conteúdo que estava impedindo a criação da navegação para o Home/index.js
  Assim, o primeiro conteúdo que será renderizado será o dessa tela.
*/

export default function App(){
  return(
     <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Contato" component={Contato} />
        <Drawer.Screen name="Camera" component={Camera} />
      </Drawer.Navigator>
    </NavigationContainer>
  )

}
