import React from 'react';
import { View } from 'react-native';
import { COLORS, FRONTEND_MASTERS, RAINBOW } from '../api/colors';
import PalettePreviewNavigation from '../components/PalettePreviewNavigation';

const Home = ({ navigation }) => {
  return (
    <View>
      <PalettePreviewNavigation
        navigation={navigation}
        colors={COLORS}
        title="Solarized"
      />
      <PalettePreviewNavigation
        navigation={navigation}
        colors={RAINBOW}
        title="Rainbow"
      />
      <PalettePreviewNavigation
        navigation={navigation}
        colors={FRONTEND_MASTERS}
        title="Frontend masters"
      />
    </View>
  );
};

export default Home;
