import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
  const textColor =
    parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1
      ? 'black'
      : 'white';

  return (
    <View style={[styles.box, { backgroundColor: colorHex }]}>
      <Text style={[styles.boxText, { color: textColor }]}>
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
