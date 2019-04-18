import React from "react";
import "./title.scss";

export const Title = props => {

	const Element = props.element;

	return <Element className={`title ${props.classes}`}>{props.children}</Element>;
}

Title.defaultProps = {
	element: "p",
	classes: "",
	children: ""
};
