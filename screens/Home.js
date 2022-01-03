import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import AddNewPaletteButton from '../components/AddNewPaletteButton';
import PalettePreviewNavigation from '../components/PalettePreviewNavigation';

const endpoint = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation, route }) => {
  const [palettes, setPalettes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const newPalette = route.params?.newPalette;

  const fetchColorPalettes = useCallback(async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setPalettes(data);
  }, []);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchColorPalettes();
    setRefreshing(false);
  }, [fetchColorPalettes]);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  useEffect(() => {
    if (newPalette) {
      setPalettes((prevPalettes) => [newPalette, ...prevPalettes]);
    }
  }, [newPalette]);

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
          refreshing={refreshing}
          onRefresh={handleRefresh}
          ListHeaderComponent={<AddNewPaletteButton />}
        />
      </View>
    )
  );
};

export default Home;
