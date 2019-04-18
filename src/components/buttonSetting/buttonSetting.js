import React from 'react';
import { ListItemContainer } from '../../elements/listItemContainer';
import { ListItemDescription } from '../../elements/listItemDescription';
import { Button } from '../../elements/button';

export const ButtonSetting = props => {

	return( 
		<ListItemContainer
			leftSlot={
				<ListItemDescription>{props.description}</ListItemDescription>
			}
			rightSlot={
				<Button
				classes={props.buttonClasses}
				disabled={props.disabled}
				onClick={props.onClick}
				>
				{props.buttonLabel}
				</Button>
			}
		/>
	)

}

ButtonSetting.defaultProps = {
	buttonClasses: null,
	disabled: false
}