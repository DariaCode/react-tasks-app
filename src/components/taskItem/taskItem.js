import React from "react";
import { ListItemContainer } from "../../elements/listItemContainer";
import { Check } from "../../elements/check";
import { ListItemDescription } from "../../elements/listItemDescription";
import "./taskItem.scss";

export const TaskItem = props => {

	return(
		<ListItemContainer classes="task-item"
			leftSlot={
				<React.Fragment>
					<Check checked={props.complete} onChange={props.onChange}/>
					<ListItemDescription classes={props.complete ? 'text-strikethrough' : ''} >{props.description}</ListItemDescription>
				</React.Fragment>
			}
		/>
	);
	
}

TaskItem.defaultProps = {
	complete: false,
	classes: "",
	description: ""
}