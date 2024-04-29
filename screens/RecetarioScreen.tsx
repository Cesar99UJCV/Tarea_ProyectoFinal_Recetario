
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const RecetarioScreen = ({ navigation }) => {
  const handleCrearReceta = () => {
    navigation.navigate('CrearReceta'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recetario</Text>
      <Pressable onPress={handleCrearReceta}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Crear Receta</Text>
        </View>
      </Pressable>
      {}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RecetarioScreen;
