export function findNode(object, id) {
	const foundObj = object.find((p) => p.id === id);
	if (foundObj) return foundObj;

	for (const subnode of object.filter((p) => p.hasOwnProperty("subnodes"))) {
		const retObj = findNode(subnode.subnodes, id);
		if (retObj) return retObj;
	}

	return null;
}

/*
export function findNode(object, id) {
	const foundObj = object.filter(p => p.id === id)
	if (foundObj.length > 0) {
		return {...foundObj};
	} else {
		const oc = object.filter(p => p.hasOwnProperty('subnodes'))
		if (oc && typeof oc === 'object' && oc !== null) {
			for (var i=0; i < oc.length; i++) {
				const retObj = findNode(oc[i].subnodes, id)
				if (retObj != null) {
					return retObj
				}
			}
		}
	}
	return null;
}


*/
