import React from "react";

import { styled } from "../helpers/theme";
import NodeItem from "./NoteItem";

type NodeTypes = {};

const Node = styled.ul<NodeTypes>`
	margin: 0;
	padding: 0;
	list-style: none;
`;

interface NodeProps {
	menuData: Array<any>;
	open: boolean;
	level: number;
}

function NodeElement(props: NodeProps) {
	return (
		<Node hidden={!props.open}>
			{props.menuData.map((data) => (
				<NodeItem
					open={false}
					key={data.id}
					id={data.id}
					level={props.level}
					hasChildren={data.hasOwnProperty("subnodes") ? true : false}
					menuData={data.subnodes}
					url={data.hasOwnProperty("subnodes") ? "#" : data.url}
					title={data.Title}
				></NodeItem>
			))}
		</Node>
	);
}

export default NodeElement;
