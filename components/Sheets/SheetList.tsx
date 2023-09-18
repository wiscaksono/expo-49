import {
  useCallback,
  useRef,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  BottomSheetModal,
  BottomSheetFlatList,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

import { Text } from "../themed";
import Colors from "../../constants/Colors";

type SheetProps = {
  snapPoint?: string[];
  list: string[];
  onSelect?: (item: string) => void;
  selected: string;
};

export const SheetList = forwardRef(
  ({ snapPoint, list = [], onSelect, selected }: SheetProps, ref) => {
    const sheetRef = useRef<BottomSheetModal>(null);
    const { bottom } = useSafeAreaInsets();

    useImperativeHandle(ref, () => ({
      present: () => sheetRef.current?.present(),
      dismiss: () => sheetRef.current?.dismiss(),
    }));

    const snapPoints = useMemo(() => snapPoint || ["50%", "75%"], []);

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          appearsOnIndex={1}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
      [],
    );

    return (
      <BottomSheetModal
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        stackBehavior="replace"
        style={{
          padding: 16,
        }}
      >
        <BottomSheetFlatList
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: bottom }}
          data={list}
          keyExtractor={(i) => i}
          contentContainerStyle={{
            gap: 4,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item}
              style={selected === item ? styles.itemSelected : styles.item}
              activeOpacity={0.5}
              onPress={() => {
                onSelect && onSelect(item);
                sheetRef.current?.dismiss();
              }}
            >
              <Text style={selected === item && styles.textSelected}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </BottomSheetModal>
    );
  },
);

const styles = StyleSheet.create({
  item: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 4,
  },
  itemSelected: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.primary[50],
    backgroundColor: Colors.primary[50],
    borderRadius: 4,
  },
  textSelected: {
    color: "white",
  },
});
