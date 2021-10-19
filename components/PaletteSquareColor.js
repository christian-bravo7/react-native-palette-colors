import React from 'react';
import { StyleSheet, View } from 'react-native';

const PaletteSquareColor = ({ hexCode }) => {
  return <View style={[styles.colorSquare, { backgroundColor: hexCode }]} />;
};

const styles = StyleSheet.create({
  colorSquare: {
    width: 50,
    height: 50,
  },
});

export default PaletteSquareColor;
