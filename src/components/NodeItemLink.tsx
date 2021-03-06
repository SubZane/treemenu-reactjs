import React from "react";

import { css, styled } from "../helpers/theme";

type NodeItemLinkTypes = {
	level: number;
};

const NodeItemLink = styled.a<NodeItemLinkTypes>`
	color: ${(props) => props.theme.treemenu.linkColor};
	padding-top: 11px;
	padding-bottom: 13px;
	display: block;
	font-size: 14px;
	padding-left: 15px;
	padding-right: 15px;
	text-decoration: none;
	float: none;
	overflow: hidden;
	width: 100%;
	order: 1;

	${(props) =>
		props.level === 2 &&
		css`
			background-color: rgba(0, 0, 0, 0.05) !important;
			border-right: none;
			padding-left: 25px;
		`}
	${(props) =>
		props.level === 3 &&
		css`
			background-color: rgba(0, 0, 0, 0.1) !important;
			border-right: none;
			padding-left: 40px;
		`}
	${(props) =>
		props.level === 4 &&
		css`
			background-color: rgba(0, 0, 0, 0.15) !important;
			border-right: none;
			padding-left: 55px;
		`}
	${(props) =>
		props.level === 5 &&
		css`
			background-color: rgba(0, 0, 0, 0.2) !important;
			border-right: none;
			padding-left: 60px;
		`}
	${(props) =>
		props.level === 6 &&
		css`
			background-color: rgba(0, 0, 0, 0.25) !important;
			border-right: none;
			padding-left: 75px;
		`}
	&:hover {
		text-decoration: none;
		background-color: ${(props) => props.theme.treemenu.hover.backgroundColor};
		color: ${(props) => props.theme.treemenu.hover.textColor};
	}
	&::focus {
		text-decoration: none;
	}
`;

interface IProps {
	hasChildren: boolean;
	title: string;
	level: number;
	url: string;
	id: number;
	open: boolean;
	numChildren: number;
}

function NodeElement(props: IProps) {
	return (
		<>
			<NodeItemLink level={props.level} key={props.id} href={props.url}>
				{props.title}
			</NodeItemLink>
		</>
	);
}

export default NodeElement;
