import { KeyboardAvoidingView as DefaultKAV, Platform } from "react-native";

type KeyboardAvoidingViewProps = DefaultKAV["props"];

export const KeyboardAvoidingView = (props: KeyboardAvoidingViewProps) => {
  return (
    <DefaultKAV
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      {...props}
    >
      {props.children}
    </DefaultKAV>
  );
};
