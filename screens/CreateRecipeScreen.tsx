import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const CreateRecipeScreen = () => {
  const [nombre, setNombre] = useState('');
  const [tiempoPreparacion, setTiempoPreparacion] = useState('');
  const [instrucciones, setInstrucciones] = useState('');
  const [imagen, setImagen] = useState('');

  const handleCrearReceta = async () => {
    await firestore().collection('recetas').add({
      nombre,
      tiempoPreparacion: parseInt(tiempoPreparacion),
      instrucciones,
      imagen,
    });
    setNombre('');
    setTiempoPreparacion('');
    setInstrucciones('');
    setImagen('');
  };

  return (
    <View style={styles.container}>
      <Text>Crear Receta</Text>
      <TextInput
        placeholder="Nombre"
        onChangeText={(text) => setNombre(text)}
        value={nombre}
      />
      <TextInput
        placeholder="Tiempo de Preparación (en minutos)"
        onChangeText={(text) => setTiempoPreparacion(text)}
        keyboardType="numeric"
        value={tiempoPreparacion}
      />
      <TextInput
        placeholder="Instrucciones"
        onChangeText={(text) => setInstrucciones(text)}
        value={instrucciones}
      />
      <TextInput
        placeholder="Imagen"
        onChangeText={(text) => setImagen(text)}
        value={imagen}
      />
      <Pressable onPress={handleCrearReceta}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Crear Receta</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreateRecipeScreen;
