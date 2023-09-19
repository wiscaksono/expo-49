import {
  useCallback,
  useRef,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

type SheetProps = {
  snapPoint?: string[];
  children?: React.ReactNode;
};

export const SheetEmpty = forwardRef(
  ({ snapPoint, children }: SheetProps, ref) => {
    const sheetRef = useRef<BottomSheetModal>(null);

    useImperativeHandle(ref, () => ({
      present: () => sheetRef.current?.present(),
      dismiss: () => sheetRef.current?.dismiss(),
    }));

    const snapPoints = useMemo(() => snapPoint || ["50%"], []);

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
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheetModal>
    );
  },
);
