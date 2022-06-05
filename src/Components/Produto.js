import React, {Component} from 'react'
import {View, Text, Image,  TouchableOpacity} from 'react-native'

export default class Produto extends Component{
    render(){
        return(
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                {/* 
                    Faltou o "this." dentro do source da imagem 
                    Antes: props.imagem
                    Agora: this.props.imagem
                */}
                <Image source={this.props.imagem}style={{width:150, height:150}}/>
                <Text style={{fontSize:18}}>{this.props.nome}</Text>
                <Text>{this.props.preco}</Text>
                <Text>{this.props.descricao}</Text>
                <Text>{this.props.imagem}</Text>
                <TouchableOpacity style={{backgroundColor:'grey', padding:10, borderRadius: 5}}>
                    <Text style={{color: 'white'}}>COMPRAR</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}