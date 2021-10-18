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
      <View style={[styles.container, styles.yellow]}>
        <Text>Hello world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  yellow: {
    backgroundColor: 'yellow',
  },
  container: {
    margin: 10,
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
  },
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
