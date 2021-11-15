import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  View,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import PalettePreviewNavigation from '../components/PalettePreviewNavigation';

const endpoint = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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
          ListHeaderComponent={
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ColorPaletteModal');
              }}
            >
              <Text>Open Modal</Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  );
};

export default Home;
