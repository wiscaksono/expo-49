import Svg, { Path, Circle } from "react-native-svg";

export const CategoryIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Circle cx="16" cy="16" r="16" fill="#F2F2F2" />
      <Path
        d="M22 15.25V13L16 9.25L10 13V15.25H22Z"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.25 22.75H22.75"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.75 22V18.25H12.25"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.75 22V18.25H21.25"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.25 22V18.25H16.75"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
