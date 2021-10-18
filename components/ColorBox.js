import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ColorBox = ({ colorHex, colorName }) => {
  return (
    <View style={[styles.box, { backgroundColor: colorHex }]}>
      <Text style={styles.boxText}>
        {colorName}: {colorHex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
