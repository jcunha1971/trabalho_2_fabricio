import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ButtonGreen from './stylesbotao';
import { styles } from './styles';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    // Aqui você pode adicionar sua lógica de autenticação
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <ButtonGreen
        title="Entrar"
        onPress={handleLogin}
      />
    </View>
  );
};

export default Login;
