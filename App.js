import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';
import ColorBox from './components/ColorBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const App = () => {
  return (
    <SafeAreaView style={[styles.safeArea, styles.androidSafeArea]}>
      <View style={styles.container}>
        <FlatList
          data={COLORS}
          keyExtractor={({ colorName }) => colorName}
          renderItem={({ item }) => (
            <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
          )}
          ListHeaderComponent={() => (
            <Text style={styles.title}>Solarized</Text>
          )}
        />
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
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
    marginBottom: 12,
  },
});

export default App;
