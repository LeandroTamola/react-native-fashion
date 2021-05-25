import React from "react";
import { View, ScrollView } from "react-native";
import Category from "./Category";
import { categories } from "./categoriesData";

const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category
            key={category.id}
            title={category.title}
            color={category.color}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
