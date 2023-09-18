import { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import DatePicker from "react-native-date-picker";
import { Feather } from "@expo/vector-icons";

import { View, Text } from "./themed";
import { TextBody } from "../constants/TextStyles";

type DPickerProps = {
  label?: string;
  date: Date | null;
  onChange?: (date: Date) => void;
};

export const DPicker = (props: DPickerProps) => {
  const [date, setDate] = useState(props.date);
  const [open, setOpen] = useState(false);

  return (
    <View>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <TouchableOpacity onPress={() => setOpen(true)} style={[styles.button]}>
        <Text style={styles.buttonText}>
          {date &&
            date.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
        </Text>
        <Feather name="calendar" size={24} color="black" />
      </TouchableOpacity>

      <DatePicker
        modal
        mode="date"
        open={open}
        date={date || new Date()}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
          props.onChange && props.onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
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
    borderColor: "#D1D1D1",
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    ...TextBody[2],
    flex: 1,
  },
});
