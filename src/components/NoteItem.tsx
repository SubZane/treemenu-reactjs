import React, { useState } from "react";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

import { css, styled } from "../helpers/theme";
import Node from "./Node";
import NodeItemLink from "./NodeItemLink";

type NodeTypes = {};
type NodeItemTypes = {
	hasChildren: boolean;
	level: number;
};

const NodeItem = styled.li<NodeItemTypes>`
	margin: 0;
	padding: 0;
	list-style: none;
`;

const NodeItemContent = styled.div<NodeTypes>`
	display: block;
	border-bottom: 1px solid rgba(255, 255, 255, 0.15);
	font-weight: 400;
	font-size: 12px;
	display: flex;
`;

const NodeExpand = styled.a<NodeItemTypes>`
	color: #fff;
	width: 60px;
	font-size: 11px;
	float: right;
	display: block;
	padding-left: 15px;
	padding-top: 11px;
	padding-bottom: 13px;
	order: 2;
	cursor: pointer;
	&:not([href]) {
		color: #fff;
	}
	${(props) =>
		props.level === 2 &&
		css`
			background-color: rgba(0, 0, 0, 0.1) !important;
			border-right: none;
		`}
	${(props) =>
		props.level === 3 &&
		css`
			background-color: rgba(0, 0, 0, 0.2) !important;
			border-right: none;
		`}
	${(props) =>
		props.level === 4 &&
		css`
			background-color: rgba(0, 0, 0, 0.3) !important;
			border-right: none;
		`}
	${(props) =>
		props.level === 5 &&
		css`
			background-color: rgba(0, 0, 0, 0.4) !important;
			border-right: none;
		`}
	${(props) =>
		props.level === 6 &&
		css`
			background-color: rgba(0, 0, 0, 0.5) !important;
			border-right: none;
		`}
	&:hover, &:not([href]):hover {
		text-decoration: none;
		background-color: rgba(255, 255, 255, 0.8) !important;
		color: ${(props) => props.theme.backgroundColor};
	}
	&:focus {
		text-decoration: none;
	}
`;

const NodeItemToggleIcon = styled.span<NodeTypes>`
	margin-left: 5px;
`;

interface IProps {
	hasChildren: boolean;
	menuData: Array<any>;
	title: string;
	url: string;
	id: number;
	level: number;
	open: boolean;
}

function NodeElement(props: IProps) {
	const [isNodeExpanded, setNodeExpanded] = useState<boolean>(false);

	function ToggleNode() {
		setNodeExpanded(!isNodeExpanded);
	}

	return (
		<NodeItem hasChildren={props.hasChildren} level={props.level}>
			<NodeItemContent>
				<NodeItemLink
					hasChildren={props.hasChildren}
					numChildren={props.menuData?.length}
					level={props.level}
					open={props.open}
					url={props.url}
					key={props.id}
					id={props.id}
					title={props.title}
				/>
				{props.hasChildren && (
					<NodeExpand hasChildren={props.hasChildren} level={props.level} onClick={() => ToggleNode()}>
						{isNodeExpanded ? (
							<NodeItemToggleIcon>
								<BsChevronDown />
							</NodeItemToggleIcon>
						) : (
							<NodeItemToggleIcon>
								<BsChevronRight />
							</NodeItemToggleIcon>
						)}
					</NodeExpand>
				)}
			</NodeItemContent>
			{props.hasChildren && <Node open={isNodeExpanded} level={props.level + 1} menuData={props.menuData}></Node>}
		</NodeItem>
	);
}

export default NodeElement;
