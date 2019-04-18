import React from "react";
import { Title } from "../../elements/title";
import { TextLink } from "../../elements/textLink";
import "./viewHeader.scss";

export const ViewHeader = props => {
	return(
		<div className={`view-header ${props.classes}`}>
			<TextLink link={props.link}>{props.linkLabel}</TextLink>
			<Title element={props.element} classes="size-lg">{props.title}</Title>
		</div>
	);
}

ViewHeader.defaultProps = {
	classes: "",
	linkLabel: "",
	title: "",
	link: false
}