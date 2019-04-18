import React from "react";
import "./preview.scss";

export const Preview = props => {
	return (
		<div
			className={`preview ${props.classes}`}
			data-preview-label={props.label}
		>
			{props.children}
		</div>
	);
}

Preview.defaultProps = {
	classes: "",
	label: "Preview",
	children: ""
};
