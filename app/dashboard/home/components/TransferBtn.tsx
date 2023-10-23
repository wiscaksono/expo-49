import { StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "../../../../components/themed";
import { SheetEmpty } from "../../../../components/Sheets/SheetEmpty";

import Colors from "../../../../constants/Colors";
import { TextStyles } from "../../../../constants";
import { useSheet } from "../../../../hooks/useSheet";

export const TransferBtn = () => {
  const { sheetRef, openSheet } = useSheet();

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={openSheet}>
        <Text style={styles.buttonText}>Transfer</Text>
      </TouchableOpacity>
      <SheetEmpty ref={sheetRef} snapPoint={["25%"]}>
        <Text
          style={{
            ...TextStyles.TextHeading[3],
            textAlign: "center",
          }}
        >
          Nothing to do here :(
        </Text>
      </SheetEmpty>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: Colors.primary[100],
    flex: 1,
  },

  buttonText: {
    color: Colors.primary[50],
    textAlign: "center",
    ...TextStyles.TextBody["1-sb"],
  },
});
