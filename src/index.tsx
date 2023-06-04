import React, { useState } from "react";
import ReactDOM from "react-dom";

import TreeMenu from "./App";
import { ThemeProvider, treemenuTheme } from "./helpers/theme";
import menudataJSON from "./menudata.json";
import OffCanvasPanel from "./offcanvaspanel/PanelComponent/App";
import { theme as offcanvaspanelTheme } from "./offcanvaspanel/PanelComponent/theme";
import { animationTypes } from "./offcanvaspanel/PanelComponent/types";

function TreeMenuContainer() {
	const [effect, setEffect] = useState<animationTypes>("door-left");
	const theme = { ...treemenuTheme, ...offcanvaspanelTheme };

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<OffCanvasPanel state={""} showButton={true} animation={effect}>
					<TreeMenu menuDataSource={menudataJSON.treemenu} />
				</OffCanvasPanel>
				<div className="select">
					<select onChange={(e) => setEffect(e.currentTarget.value as animationTypes)}>
						<option value="door-left">Door Left</option>
						<option value="door-right">Door Right</option>
						<option value="flip-top">Flip Top</option>
						<option value="flip-bottom">Flip Bottom</option>
					</select>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}
ReactDOM.render(<TreeMenuContainer />, document.getElementById("root"));
