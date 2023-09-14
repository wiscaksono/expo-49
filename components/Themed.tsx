import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
  useColorScheme,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import { TextBody } from "../constants/TextStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type TextInputProps = ThemeProps &
  DefaultTextInput["props"] & {
    label?: string;
  };

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <DefaultText
      style={[{ color, fontFamily: "Inter" }, style]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, label, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const [viewPass, setViewPass] = useState(props.secureTextEntry);

  return (
    <View>
      {label && (
        <Text
          style={{
            marginBottom: 6,
            ...TextBody["2-sb"],
          }}
        >
          {label}
        </Text>
      )}
      <View
        style={{
          position: "relative",
        }}
      >
        <DefaultTextInput
          secureTextEntry={props.secureTextEntry}
          style={[
            {
              color,
              fontFamily: "Inter",
              borderColor: "#D1D1D1",
              borderWidth: 1,
              paddingHorizontal: 16,
              paddingVertical: 14.5,
              borderRadius: 4,
            },
            style,
          ]}
          {...otherProps}
        />
        {props.secureTextEntry && (
          <TouchableOpacity
            onPress={() => setViewPass(!viewPass)}
            style={{
              zIndex: 5,
              position: "absolute",
              right: 16,
              bottom: 12,
            }}
          >
            <FontAwesome
              name={viewPass ? "eye-slash" : "eye"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
