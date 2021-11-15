import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import PalettePreviewNavigation from '../components/PalettePreviewNavigation';

const endpoint = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);

  const fetchColorPalettes = useCallback(async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setPalettes(data);
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  return (
    palettes.length > 0 && (
      <View>
        <FlatList
          data={palettes}
          keyExtractor={({ paletteName }) => paletteName}
          renderItem={({ item }) => (
            <PalettePreviewNavigation
              key={item.id}
              navigation={navigation}
              colors={item.colors}
              title={item.paletteName}
            />
          )}
        />
      </View>
    )
  );
};

export default Home;
