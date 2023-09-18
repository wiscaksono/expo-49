import { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const useSheet = () => {
  const sheetRef = useRef<BottomSheetModal>(null);
  const openSheet = () => sheetRef.current?.present();

  return {
    sheetRef,
    openSheet,
  };
};
