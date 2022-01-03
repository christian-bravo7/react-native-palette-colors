import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PaletteSquareColor from './PaletteSquareColor';

const PalettePreview = ({ title, colors }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={colors}
        horizontal={true}
        keyExtractor={({ colorName }) => colorName}
        renderItem={({ item }) => <PaletteSquareColor hexCode={item.hexCode} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default PalettePreview;
