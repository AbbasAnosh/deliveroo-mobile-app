import { StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useMemo } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
      <Text>BottomSheet</Text>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({});
