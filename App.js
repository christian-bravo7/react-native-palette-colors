import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={[styles.safeArea, styles.androidSafeArea]}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colors
        </Text>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.boxText}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.boxText}>Blue #268bd2</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.boxText}>Magenta #d33682</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.boxText}>Orange #cb4b16</Text>
        </View>
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
  box: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});

export default App;
