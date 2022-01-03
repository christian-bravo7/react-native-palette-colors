import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import PaletteSquareColor from './PaletteSquareColor';

const AvailableColorItem = ({
  hexCode,
  colorName,
  onValueChange,
  isSelected,
}) => {
  return (
    <View style={styles.container}>
      <PaletteSquareColor hexCode={hexCode} />
      <Text style={styles.text}>{colorName}</Text>
      <Switch value={isSelected} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#7d7d7d',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
  },
});

export default AvailableColorItem;
