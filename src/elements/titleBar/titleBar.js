import React from "react";
import "./titleBar.scss";

export const TitleBar = props => {
	return (
	<div className={`title-bar ${props.classes}`}>
		{ props.leftSlot && 
			<div className="left-slot">
				{props.leftSlot}
			</div>
		}
		{ props.rightSlot && 
			<div className="right-slot">
				{props.rightSlot}
			</div>
		}
	</div>
	);
}

TitleBar.defaultProps = {
	classes: ""
}
