import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

export const Button = props => {

	let Element;
	
	if( props.link && props.external ) {
		Element = "a"
	}
	else if( props.link ) {
		Element = Link
	}
	else {
		Element = "button"
	}

	return (
		<Element
			type={props.type}
			name={props.name}
			className={`button ${props.classes}`}
			disabled={props.disabled}
			onClick={props.onClick}
			to={props.link ? props.link : undefined}
			{...props.external ? {href: props.link, target: '_blank'} : null}
		>
			{props.children}
		</Element>
	);
}

Button.defaultProps = {
	type: null,
	name: null,
	classes: null,
	disabled: false,
	children: null,
	link: false,
	external: false
};
