
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleRegistrar = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      setMensaje('Usuario creado correctamente');
      navigation.navigate('Recetario'); 
    } catch (error) {
      setMensaje(error.message);
    }
    setEmail('');
    setPassword('');
  };

  const handleIniciarSesion = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      setMensaje('Bienvenido, has iniciado sesión');
      navigation.navigate('Recetario'); 
    } catch (error) {
      setMensaje(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={[styles.input, { color: 'black' }]} 
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={[styles.input, { color: 'black' }]} 
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable onPress={handleRegistrar}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Registrar Usuario</Text>
          </View>
        </Pressable>
        <Pressable onPress={handleIniciarSesion}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </View>
        </Pressable>
        {mensaje ? <Text style={styles.mensaje}>{mensaje}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', 
  },
  form: {
    width: '80%',
  },
  label: {
    color: 'white',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mensaje: {
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;


