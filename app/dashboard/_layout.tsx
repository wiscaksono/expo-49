import { Tabs } from "expo-router";
import {
  HomeIcon,
  CardsIcon,
  ProductsIcon,
  ProfileIcon,
} from "../../assets/icons/tabs";

const screens = [
  {
    name: "home",
    title: "Home",
    icon: HomeIcon,
  },
  {
    name: "cards",
    title: "Cards",
    icon: CardsIcon,
  },
  {
    name: "transfer",
    title: "Transfer",
    icon: HomeIcon,
  },
  {
    name: "products",
    title: "Products",
    icon: ProductsIcon,
  },
  {
    name: "profile",
    title: "Profile",
    icon: ProfileIcon,
  },
];

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {screens.map((screen, i) => (
        <Tabs.Screen
          key={i}
          name={screen.name}
          options={{
            title: screen.title,
            tabBarIcon: ({ focused }) => <screen.icon isFocused={focused} />,
          }}
        />
      ))}
    </Tabs>
  );
};
