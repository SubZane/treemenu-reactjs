import React from "react";
import ReactDOM from "react-dom/client";

import TreeMenu from "./App";
import { theme, ThemeProvider } from "./helpers/theme";
import menudataJSON from "./menudata.json";
import OffCanvasPanel from "./offcanvas-panel/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<OffCanvasPanel state={""} showButton={true} animation={"door-left"}>
				<TreeMenu menuDataSource={menudataJSON.treemenu} />
			</OffCanvasPanel>
		</ThemeProvider>
	</React.StrictMode>
);
