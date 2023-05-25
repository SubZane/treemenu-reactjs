import "./App.css";

import React, { useEffect, useState } from "react";

import Node from "./components/Node";
import { styled } from "./helpers/theme";

type treemenuObjectType = {
	id: number;
	Title: string;
	url: string;
	subnodes?: [treemenuObjectType];
};

const Navigation = styled.nav`
	border-top: 1px solid rgba(255, 255, 255, 0.15);
	background-color: ${(props) => props.theme.backgroundColor};
`;

interface TreeMenuProps {
	menuDataSource: Array<any>;
}

function TreeMenu(props: TreeMenuProps) {
	const [menuData, loadMenuData] = useState<Array<treemenuObjectType>>([]);

	useEffect(() => {
		loadMenuData(props.menuDataSource);
	}, [props.menuDataSource]);

	return (
		<>
			<Navigation>
				<Node level={1} open={true} menuData={menuData}></Node>
			</Navigation>
		</>
	);
}

export default TreeMenu;
