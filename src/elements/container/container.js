import React from "react";
import "./container.scss";

export const Container = props => {
	return <div className={`container ${props.classes}`}>{props.children}</div>;
}

Container.defaultProps = {
	classes: "",
	children: ""
};
