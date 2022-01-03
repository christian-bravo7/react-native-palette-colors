import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PaletteNameInput = ({ onChangeText, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name of your color palette:</Text>
      <TextInput
        style={styles.input}
        placeholder="My awesome palette..."
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderColor: '#7d7d7d',
    borderWidth: 1,
    borderRadius: 8,
  },
  container: {
    padding: 12,
  },
});

export default PaletteNameInput;
