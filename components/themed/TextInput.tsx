import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput as DefaultTextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { TextBody } from "../../constants/TextStyles";

type TextInputProps = DefaultTextInput["props"] & { label: string };

export const TextInput = (props: TextInputProps) => {
  const [viewPass, setViewPass] = useState(props.secureTextEntry);

  return (
    <View>
      {props.label && (
        <Text
          style={{
            marginBottom: 6,
            ...TextBody["2-sb"],
          }}
        >
          {props.label}
        </Text>
      )}
      <View
        style={{
          position: "relative",
        }}
      >
        <DefaultTextInput
          secureTextEntry={viewPass}
          style={[
            {
              fontFamily: "Inter",
              borderColor: "#D1D1D1",
              borderWidth: 1,
              paddingHorizontal: 16,
              paddingVertical: 14.5,
              borderRadius: 4,
            },
            props.style,
          ]}
          {...props}
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
            <Ionicons
              name={viewPass ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
