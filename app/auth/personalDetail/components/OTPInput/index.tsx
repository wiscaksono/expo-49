import React, { useRef, useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type OTPInputProps = {
  code: string;
  setCode: (code: string) => void;
  maximumCodeLength: number;
  setIsPinReady: (isPinReady: boolean) => void;
};

export const OTPInput = ({
  code,
  setCode,
  maximumCodeLength,
  setIsPinReady,
}: OTPInputProps) => {
  const boxArray = new Array(maximumCodeLength).fill(0);
  const inputRefs = Array.from({ length: maximumCodeLength }, () =>
    useRef<TextInput | null>(null),
  );

  useEffect(() => {
    setIsPinReady(code.length === maximumCodeLength);
  }, [code, maximumCodeLength, setIsPinReady]);

  const handleOnPress = (index: number) => {
    inputRefs[index].current?.focus();
  };

  const handleTextChange = (text: string, index: number) => {
    if (text.length === 1) {
      if (index < maximumCodeLength - 1) {
        inputRefs[index + 1].current?.focus();
      }
    } else if (text.length === 0) {
      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }

    const updatedCode = [...code];
    updatedCode[index] = text;
    setCode(updatedCode.join(""));
  };

  return (
    <TouchableOpacity style={styles.boxDigit} onPress={() => handleOnPress(0)}>
      {boxArray.map((_, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          onChangeText={(text) => handleTextChange(text, index)}
          maxLength={1}
          value={code[index] || ""}
          style={[styles.splitBoxes]}
          keyboardType="numeric"
        />
      ))}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxDigit: {
    flexDirection: "row",
    gap: 8,
  },
  splitBoxes: {
    borderColor: "#D1D1D1",
    borderWidth: 1,
    borderRadius: 5,
    width: 48,
    height: 48,
    fontSize: 24,
    textAlign: "center",
  },
});
