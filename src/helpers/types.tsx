export type treemenuObjectType = {
	id: number;
	Title: string;
	url: string;
	subnodes?: [treemenuObjectType];
};

export type parentKeysType = {
	id: number;
	Title: string;
	nodeLevel: number;
};

export type stateTypes = "open" | "close" | "";
export type menuFadeTypes = "in-left" | "out-left" | "in-right" | "out-right" | "";
export type overlayFadeTypes = "in" | "out" | "";
export type childrenTypes = JSX.Element[] | JSX.Element;
