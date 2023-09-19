import { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { TextStyles } from "../../../../constants";
import { convertCurrency } from "../../../../utils/convertCurrency";
import { Text, View } from "../../../../components/themed";
import { CategoryIcon } from "../../../../assets/icons/category";
import Colors from "../../../../constants/Colors";

export const TopCategories = () => {
  const [active, setActive] = useState(data[0]);

  return (
    <View>
      <View style={styles.headingWrapper}>
        <Text style={styles.headingTitle}>Top Categories</Text>
        <Text style={styles.headingDesc}>This month</Text>
      </View>
      <View style={styles.categoriesWrapper}>
        <View style={styles.categoriesMenu}>
          {data.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.menu,
                {
                  borderBottomColor:
                    active.name === item.name
                      ? Colors.primary[50]
                      : Colors.neutral[95],
                },
              ]}
              onPress={() => setActive(item)}
            >
              <Text
                style={[
                  styles.menuText,
                  {
                    color:
                      active.name === item.name
                        ? Colors.primary[50]
                        : Colors.neutral[50],
                  },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View>
          {active.category.map((item, i) => (
            <View key={i} style={styles.categoryWrapper}>
              <CategoryIcon />
              <Text style={styles.categoryTitle}>{item.name}</Text>
              <Text style={styles.categoryAmount}>
                {convertCurrency(item.amount)}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingWrapper: {
    gap: 2,
    marginBottom: 8,
  },
  headingTitle: {
    ...TextStyles.TextBody["1-sb"],
  },
  headingDesc: {
    ...TextStyles.TextBody[3],
    color: Colors.neutral[50],
  },
  categoriesWrapper: {
    borderColor: "#D1D1D1",
    borderWidth: 1,
    borderRadius: 4,
  },
  categoriesMenu: {
    flexDirection: "row",
  },
  menu: {
    flex: 1,
    borderBottomWidth: 2,
  },
  menuText: {
    textAlign: "center",
    paddingVertical: 12,
    ...TextStyles.TextBody["2-sb"],
  },
  categoryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  categoryTitle: {
    ...TextStyles.TextBody[2],
    flex: 1,
  },
  categoryAmount: {
    ...TextStyles.TextBody[2],
  },
});

const data = [
  {
    name: "Expenses",
    category: [
      {
        name: "Food",
        amount: 1000,
      },
      {
        name: "Transportation",
        amount: 500,
      },
      {
        name: "Shopping",
        amount: 200,
      },
      {
        name: "Entertainment",
        amount: 100,
      },
      {
        name: "Health",
        amount: 100,
      },
    ],
  },
  {
    name: "Income",
    category: [
      {
        name: "Salary",
        amount: 1000,
      },
      {
        name: "Bonus",
        amount: 500,
      },
      {
        name: "Investment",
        amount: 200,
      },
      {
        name: "Gift",
        amount: 100,
      },
      {
        name: "Other",
        amount: 100,
      },
    ],
  },
];
