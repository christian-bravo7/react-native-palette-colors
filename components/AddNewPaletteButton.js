import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AddNewPaletteButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('ColorPaletteModal');
      }}
    >
      <Text style={styles.text}>Add a color scheme</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    padding: 12,
    backgroundColor: '#5de45d1c',
    marginBottom: 10,
  },
});

export default AddNewPaletteButton;
