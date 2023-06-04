import React, { useState } from "react";
import ReactDOM from "react-dom";

import TreeMenu from "./App";
import { theme, ThemeProvider } from "./helpers/theme";
import { animationTypes } from "./helpers/types";
import menudataJSON from "./menudata.json";
import OffCanvasPanel from "./offcanvas-panel/App";

function TreeMenuContainer() {
	const [effect, setEffect] = useState<animationTypes>("door-left");

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
