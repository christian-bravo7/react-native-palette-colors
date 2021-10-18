import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={[styles.safeArea, styles.androidSafeArea]}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colors
        </Text>
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Blue" colorHex="#268bd2" />
        <ColorBox colorName="Magenta" colorHex="#d33682" />
        <ColorBox colorName="Orange" colorHex="#cb4b16" />
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
