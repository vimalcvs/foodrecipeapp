import {View, ScrollView, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {categoryData} from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import tw from 'twrnc';
import Animated, {FadeInDown} from 'react-native-reanimated';

export default function Categories({
  categories,
  activeCategory,
  handleChangeCategory,
}) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categories.map((cat, index) => {
          let isActive = cat.strCategory === activeCategory;
          let activeButtonClass = isActive ? 'bg-amber-400' : 'bg-black/10';
          return (
            <TouchableOpacity
              onPress={() => handleChangeCategory(cat.strCategory)}
              key={index}
              className="flex items-center space-y-1">
              <View style={tw.style('rounded-full p-[6px]', activeButtonClass)}>
                <Image
                  source={{uri: cat.strCategoryThumb}}
                  style={{width: hp(6), height: hp(6)}}
                  className="rounded-full"
                />
              </View>
              <Text className="text-neutral-600" style={{fontSize: hp(1.6)}}>
                {cat.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
}
