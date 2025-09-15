import { FluentProvider } from "@fluentui/react-components";
import React from "react";
import ReactDOM from "react-dom";

import { webLightTheme } from "@fluentui/react-components";

const themeV9 = webLightTheme;
const rootStyle = { height: "100vh", padding: "1rem" };


export const render = (Component: React.ComponentType): void => {
    ReactDOM.render(
        <React.StrictMode>
            <FluentProvider theme={themeV9} style={rootStyle} applyStylesToPortals={false}>
                <Component />
            </FluentProvider>
        </React.StrictMode>,
        document.getElementById("container"),
    );
};
