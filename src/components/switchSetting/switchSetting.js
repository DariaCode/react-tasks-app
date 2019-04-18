import React from 'react';
import { ListItemContainer } from '../../elements/listItemContainer';
import { ListItemDescription } from '../../elements/listItemDescription';
import { Switch } from '../../elements/switch';

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