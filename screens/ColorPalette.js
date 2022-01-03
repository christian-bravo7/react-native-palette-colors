import React from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const {
    params: { colors, title },
  } = route;

  return (
    <SafeAreaView style={[styles.safeArea]}>
      <FlatList
        data={colors}
        keyExtractor={({ colorName }) => colorName}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 12,
  },
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 6,
    padding: 12,
  },
});

export default ColorPalette;
