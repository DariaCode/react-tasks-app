import React from 'react';
import { TextLink } from '../text-link';

export const AppFooter = () => {
	return(
		<footer className="app-footer">
			<ul>
				<li><TextLink link="https://binaryjim.co.uk" external={true} >Built by BinaryJim</TextLink></li>
				<li><TextLink link="https://github.com/BinaryJim/react-tasks-app" external={true} >GitHub source</TextLink></li>
				<li><TextLink link="/design-system" >Design system</TextLink></li>
			</ul>
		</footer>
	);
}