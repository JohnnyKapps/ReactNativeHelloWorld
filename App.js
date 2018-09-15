import React from 'react';

import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem vindo ao app</Text>
        <TextInput selectTextOnFocus={false} style={styles.input} placeholder={'E-mail'}></TextInput>
        <TextInput selectTextOnFocus={false} secureTextEntry={true} style={styles.input} placeholder={'*************'}></TextInput>
        <Button title={'Entrar'} onPress={() => {Alert.alert('Fazendo login...')}}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    marginBottom: 20
  },
  input: {
    fontSize: 16,
    marginBottom: 5,
    width: 300,
    textAlign: 'center'
  }
});
