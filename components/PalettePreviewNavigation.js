import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PalettePreview from './PalettePreview';

const PalettePreviewNavigation = ({ colors, title, navigation }) => {
  const topFiveColors = colors.slice(0, 5);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('ColorPalette', { colors, title });
      }}
    >
      <PalettePreview colors={topFiveColors} title={title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    padding: 12,
  },
});

export default PalettePreviewNavigation;
