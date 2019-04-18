import React from "react";
import "./listItemDescription.scss";

export const ListItemDescription = props => {
	return (
		<p className={`list-item-description ${props.classes}`}>{props.children}</p>
	);
}

ListItemDescription.defaultProps = {
	classes: ""
};
