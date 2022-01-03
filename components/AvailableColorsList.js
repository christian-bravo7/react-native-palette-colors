import React from 'react';
import { FlatList } from 'react-native';
import { AVAILABLE_COLORS } from '../api/colors';
import AvailableColorItem from './AvailableColorItem';

const AvailableColorsList = ({ paletteColorSet, onValueChange }) => {
  return (
    <FlatList
      data={AVAILABLE_COLORS}
      renderItem={({ item }) => (
        <AvailableColorItem
          hexCode={item.hexCode}
          colorName={item.colorName}
          isSelected={paletteColorSet.has(item)}
          onValueChange={() => onValueChange(item)}
        />
      )}
    />
  );
};

export default AvailableColorsList;
