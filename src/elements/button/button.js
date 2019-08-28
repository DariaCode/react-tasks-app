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
			{ ...props.name ? { name: props.name } : null}
			//name={props.name}
			{ ...props.type ? { type: props.type } : null}
			//type={props.type}
			{...props.classes ? { className : `button ${props.classes}` } : { className: "button" } }
			//className={`button ${props.classes}`}
			{ ...props.disabled ? { disabled: true } : null }
			//disabled={props.disabled}
			{...props.onClick ? { onClick: props.onClick} : null }
			//onClick={props.onClick}
			{...props.link && !props.external ? { to: props.link } : undefined}
			// to={props.link ? props.link : undefined}
			{...props.external ? { href: props.link, target: '_blank' } : null}
		>
			{props.children}
		</Element>
	);
}

Button.defaultProps = {
	name: null,
	type: null,
	classes: null,
	disabled: false,
	onClick: null,
	link: false,
	external: false,
	children: null,
};
