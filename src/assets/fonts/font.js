import { createGlobalStyle } from "styled-components";
import discworld from "./discworldgame.otf";

export default createGlobalStyle`
    @font-face {
        font-family: "discworld";
        src: local("discworld"), url(${discworld}) format("opentype")
    }
`;
