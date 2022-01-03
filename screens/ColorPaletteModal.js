import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import AvailableColorsList from '../components/AvailableColorsList';
import PaletteNameInput from '../components/PaletteNameInput';

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');
  const [paletteColorSet, setPaletteColorSet] = useState(new Set());

  const handleSelectColor = (color) => {
    setPaletteColorSet((prevPaletteColorSet) => {
      const newSet = new Set(prevPaletteColorSet);

      if (newSet.has(color)) {
        newSet.delete(color);
      } else {
        newSet.add(color);
      }

      return newSet;
    });
  };

  const handleSave = () => {
    if (!name) {
      Alert.alert('Opps!', 'Please enter a name for your palette', [
        {
          text: 'Ok',
        },
      ]);

      return;
    }

    if (paletteColorSet.size < 3) {
      Alert.alert('Opps!', 'Please select at least 3 colors', [
        {
          text: 'Ok',
        },
      ]);

      return;
    }

    const newPalette = {
      id: name,
      paletteName: name,
      colors: [...paletteColorSet],
    };

    navigation.navigate('Home', { newPalette });
  };

  return (
    <View style={styles.container}>
      <PaletteNameInput onChangeText={setName} text={name} />
      <AvailableColorsList
        paletteColorSet={paletteColorSet}
        onValueChange={handleSelectColor}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saveButton: {
    backgroundColor: '#0f61fa',
    paddingVertical: 12,
  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ColorPaletteModal;
