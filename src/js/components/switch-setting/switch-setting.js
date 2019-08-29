import React from 'react';
import { ListItemContainer } from '../list-item-container';
import { ListItemDescription } from '../list-item-description';
import { Switch } from '../switch';

export const SwitchSetting = props => {

	return( 
		<ListItemContainer
			leftSlot={
				<ListItemDescription>{props.description}</ListItemDescription>
			}
			rightSlot={
				<Switch
				checked={props.checked}
				onChange={props.onChange}
				disabled={props.disabled}
				/>
			}
		/>
	)

}

SwitchSetting.defaultProps = {
	disabled: false
}