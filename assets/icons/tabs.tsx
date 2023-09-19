import Svg, { Path } from "react-native-svg";

export const HomeIcon = ({ isFocused }: { isFocused: boolean }) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 19V12.267C21 11.7245 20.8896 11.1876 20.6756 10.689C20.4616 10.1905 20.1483 9.74069 19.755 9.36701L13.378 3.31001C13.0063 2.9569 12.5132 2.76001 12.0005 2.76001C11.4878 2.76001 10.9947 2.9569 10.623 3.31001L4.245 9.36701C3.85165 9.74069 3.53844 10.1905 3.3244 10.689C3.11037 11.1876 3 11.7245 3 12.267V19C3 19.5304 3.21071 20.0392 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0392 21 19.5304 21 19Z"
        fill={`${isFocused ? "#0055F9" : "white"}`}
        stroke={`${isFocused ? "#0055F9" : "#646464"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21H9V15Z"
        fill="white"
        stroke={`${isFocused ? "#0055F9" : "#646464"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const CardsIcon = ({ isFocused }: { isFocused: boolean }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
        fill={`${isFocused ? "#0055F9" : "white"}`}
        stroke={`${isFocused ? "#0055F9" : "#646464"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 10.016C11.7392 9.69983 11.412 9.44492 11.0417 9.26934C10.6713 9.09375 10.2669 9.0018 9.857 9C8.28 9 7 10.343 7 12C7 13.657 8.28 15 9.857 15C10.711 15 11.477 14.607 12 13.984M17 12C17 13.657 15.72 15 14.143 15C12.565 15 11.286 13.657 11.286 12C11.286 10.343 12.565 9 14.143 9C15.72 9 17 10.343 17 12Z"
        stroke={`${isFocused ? "white" : "#646464"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const ProductsIcon = ({ isFocused }: { isFocused: boolean }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 7H5C3.89543 7 3 7.89543 3 9V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7Z"
        fill={`${isFocused ? "#0055F9" : "white"}`}
        stroke={`${isFocused ? "#0055F9" : "#646464"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 6C9 5.46957 9.21071 4.96086 9.58579 4.58579C9.96086 4.21071 10.4696 4 11 4H13C13.5304 4 14.0391 4.21071 14.4142 4.58579C14.7893 4.96086 15 5.46957 15 6V7H9V6Z"
        stroke={`${isFocused ? "#0055F9" : "#646464"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 12L10.211 12.106C10.7665 12.3838 11.379 12.5284 12 12.5284C12.621 12.5284 13.2335 12.3838 13.789 12.106L14 12"
        stroke={`${isFocused ? "white" : "#646464"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const ProfileIcon = ({ isFocused }: { isFocused: boolean }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        fill={`${isFocused ? "#0055F9" : "white"}`}
        stroke={`${isFocused ? "#0055F9" : "#646464"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.0001 14H17.3521C18.0831 14.0002 18.789 14.2674 19.337 14.7513C19.885 15.2352 20.2374 15.9026 20.3281 16.628L20.7191 19.752C20.7542 20.0334 20.7291 20.3191 20.6455 20.5901C20.5618 20.8611 20.4214 21.1112 20.2337 21.3238C20.046 21.5364 19.8152 21.7066 19.5566 21.8232C19.2981 21.9398 19.0177 22.0001 18.7341 22H5.26606C4.98244 22.0001 4.70206 21.9398 4.44351 21.8232C4.18496 21.7066 3.95416 21.5364 3.76644 21.3238C3.57871 21.1112 3.43835 20.8611 3.35467 20.5901C3.27098 20.3191 3.24589 20.0334 3.28106 19.752L3.67106 16.628C3.76176 15.9022 4.11448 15.2346 4.66289 14.7506C5.21131 14.2667 5.91764 13.9997 6.64906 14H7.00006"
        fill={`${isFocused ? "#0055F9" : "white"}`}
        stroke={`${isFocused ? "#0055F9" : "#646464"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const TransferIcon = ({ isFocused }: { isFocused: boolean }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 6H3M21 6L17 10M21 6L17 2"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3 18H21M3 18L7 22M3 18L7 14"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
