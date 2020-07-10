import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button ,Alert} from 'react-native';

function BoasVindas(props) {

  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
  const[nome,setNome] = useState('');
  const[sobrenome,setSobrenome] = useState('');
  const[mostrarMensagem,setMostrarMensagem] = useState(false);

  const _apresentarMensagem =() =>{
      if(!nome == "" && !sobrenome == ""){
        setMostrarMensagem(true)
      }else{
        Alert.alert(
            "Por favor preencha os campos.",
            [
                {text: "Ok"},
            ],
        )
      }
  }
  const _Limpar =() =>{
      setNome("");
      setSobrenome("");
      setMostrarMensagem(false);
  }
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Identifique-se humano</Text>
        <TextInput
            style={styles.campo}
            placeholder="Digite seu nome"
            onChangeText ={nome => setNome(nome)}
            value= {nome}
        />
        <TextInput
            style={styles.campo}
            placeholder="Digite seu sobrenome"
            onChangeText ={sobrenome => setSobrenome(sobrenome)}
            value= {sobrenome}
        />
        <View style={styles.butaoContainer}>
            <Button
                onPress ={_apresentarMensagem}
                title = "ENVIAR"
            />
        </View>

        <View style={styles.butaoContainer}>
            <Button
                onPress ={_Limpar}
                title = "LIMPAR"
            />
        </View>

        {mostrarMensagem && (
        <View>
            <Text style={styles.texto}>Olá,{nome},{sobrenome}!{props.saudacao}</Text>
            <Text style={styles.texto}>{mensagem}</Text>
        </View>
      )}

      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  botaoContainer:{
      marginBottom:5,
      marginTop: 5,
      borderRadius:5,
  },
  texto: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",

  },
  campo: {
    backgroundColor: '#FFFFFF',
    height: 35,
    borderRadius: 5,
    margin: 10

    
  }
});
export default BoasVindas;
