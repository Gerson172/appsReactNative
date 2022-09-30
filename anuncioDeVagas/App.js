import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text} from 'react-native';
 
class App extends Component{
  render(){
    return(

      <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Anuncios de Vagas</Text>

       <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box1}>
            <Text style={styles.subtitulo}>Desenvolvedor .NET</Text>
            <Text style={styles.descricao}>R$ 4.000,00</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.subtitulo}>Desenvolvedor Java</Text>
            <Text>R$ 5.000,00</Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.subtitulo}>Sofware Engineer</Text>
            <Text>R$ 10.000,00</Text>
            <Text></Text>
            <Text>(+55) 9999-9999</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.subtitulo}>Scrum Master</Text>
            <Text>R$ 5.000,00</Text>

          </View>    
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
     padding: 2,
     marginTop: 45,
     alignItems: 'center'
  },
  tituloPrincipal:{
      fontSize: 35,
      textAlign: 'center',
      color: `#b22222`,
      
  },
  subtitulo:{
      margin: 10,
      fontSize: 19,
      textAlign: 'center',
      color: `#191970`,
      
  },
  descricao:{
      textAlign: 'center',
      fontSize: 15,


  },
  box1:{
    backgroundColor: 'white',
    height: 250,
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
  },
  box2:{
    backgroundColor: 'white',
    height: 250,
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
  },
  box3:{
    backgroundColor: 'white',
    height: 250,
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
  },
  box4:{
    backgroundColor: 'white',
    height: 250,
    width: 300,
    height: 250,
    margin: 5,
    borderWidth: 4,
  },
})
 
export default App;
