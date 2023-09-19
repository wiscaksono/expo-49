import { TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { View, Text } from "./themed";
import { TextBody } from "../constants/TextStyles";
import Colors from "../constants/Colors";
import { SheetList } from "./Sheets";
import { useSheet } from "../hooks/useSheet";

type SelectProps = {
  label?: string;
  placeholder?: string;
  list: string[];
  onSelect?: (item: string) => void;
  selected: string;
  disabled?: boolean;
};

export const Select = (props: SelectProps) => {
  const {
    label,
    placeholder = "Please select",
    list,
    onSelect,
    selected,
  } = props;

  const { sheetRef, openSheet } = useSheet();

  return (
    <View style={{ flex: 1 }}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: props.disabled ? Colors.neutral[95] : "white",
          },
        ]}
        activeOpacity={0.8}
        onPress={openSheet}
      >
        <Text style={styles.buttonText}>
          {selected ? selected : placeholder}
        </Text>
        <Entypo name="chevron-small-down" size={24} color="black" />
      </TouchableOpacity>

      <SheetList
        ref={sheetRef}
        list={list}
        selected={selected}
        onSelect={onSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 6,
    ...TextBody["2-sb"],
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 4,
  },
  buttonText: {
    flex: 1,
    color: Colors.neutral[50],
    ...TextBody[2],
  },
});
