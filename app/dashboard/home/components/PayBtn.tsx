import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { Text, View } from "../../../../components/themed";
import { SheetEmpty } from "../../../../components/Sheets/SheetEmpty";

import Colors from "../../../../constants/Colors";
import { TextStyles } from "../../../../constants";
import { useSheet } from "../../../../hooks/useSheet";

export const PayBtn = () => {
  const { sheetRef, openSheet } = useSheet();

  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = () => {
    setScanned(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={openSheet}>
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableOpacity>
      <SheetEmpty ref={sheetRef} snapPoint={["45%"]}>
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 8,
            }}
          />
        </View>
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
