import React from 'react';
  import { View, Text, Button } from 'react-native';

  function About() {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>About</Text>
              <Text>Criada em 2012, Danielli Sant'Anna desenvolve vestidos de alta costura para mulheres que buscam modelos 
        exclusivos que harmonizam romantismo, sensualidade e modernidade com um atendimento personalizado, 
        garantindo que a personalidade de cada cliente seja impressa em seu vestido.
        
O Atelier localizado em Porto Alegre promove um ambiente clássico e aconchegante, recebendo suas clientes 
sofisticadas. Sempre prezando a qualidade do atendimento e os materiais mais exclusivos do mercado.
       
Querendo atender a demanda das clientes que precisam de uma peça especial para um evento de última hora, 
ou que não têm tempo de passar pelo cuidadoso processo sob medida, a nova linha ready-to-wear, a R2W, está 
sendo lançada.

Formada em design de moda pela Feevale, Danielli Sant'Anna nunca escondeu que desde pequena adora o mundo da moda e
 das artes em geral. Foi enquanto trabalhava na Daslu que entrou em contato com o universo da alta costura 
 e descobriu sua verdadeira paixão. Paralelo ao trabalho, Danielli fazia vestidos de festas 
 para suas amigas. O hobby deu super certo, tornando-se uma marca referência no mundo da alta costura</Text>
          </View>
      );
  }

  export default About;