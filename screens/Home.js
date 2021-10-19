import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette');
        }}
      >
        <Text>Hello world</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;