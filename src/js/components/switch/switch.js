import React from "react";

export const Switch = props => {
	return (
		<label className={`switch ${props.classes}`}>
			<input
				name={props.name}
				type="checkbox"
				checked={props.checked}
				disabled={props.disabled}
				onChange={props.onChange}
			/>
			<span className="paddle" />
		</label>
	);
}

Switch.defaultProps = {
	name: "",
	checked: false,
	disabled: false,
	classes: ""
};
