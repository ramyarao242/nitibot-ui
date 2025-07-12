// import { extend } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { degrees } from "framer-motion";
import { linearGradient, text } from "framer-motion/client";

const theme = extendTheme({
  colors: {
    buttonText: "#ffffff",
    buttonTextShadow: "0px 0px 6px #f5c944",
    inputText: "#cfc6a5",
    subtitle: "#d9c98a",
    title: "#f5e7b8",

    background6: "#1a1529",
    nitibotTitle6: "#ffd900ff",
    text6: "#F8F1EF",
    buttonBackground6: "#C89B2B",
    buttonText6: "#1a1529",
    glow6: "#eccc6bff",
    background2: "#F5E8C7",
    nitibotTitle2: "#8B5E3C",
    text2: "#8B5E3C",
    buttonBackground2: "#F5E8C7",
    buttonText2: "#8B5E3C",

    background3: "#1E1E1E",
    nitibotTitle3: "#FFFFFF",
    text3: "#FFFFFF",
    buttonBackground3: "#1E1E1E",
    buttonText3: "#FFFFFF",

    background4: "#000000",
    nitibotTitle4: "#FFD700",
    text4: "#FFD700",
    buttonBackground4: "#000000",
    buttonText4: "#FFD700",

    background5: "#F9E79F",
    nitibotTitle5: "#2C2C2C",
    text5: "#00000",
    buttonBackground5: "#FFD700",
    buttonText5: "#8B5E3C",


  },
});

export default theme;