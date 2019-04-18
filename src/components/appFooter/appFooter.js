import React from 'react';
import { TextLink } from '../../elements/textLink';
import './appFooter.scss';

export const AppFooter = () => {
	return(
		<footer className="app-footer">
			<ul>
				<li><TextLink link="https://binaryjim.co.uk" external={true} >Built by BinaryJim</TextLink></li>
				<li><TextLink link="https://github.com/BinaryJim" external={true} >GitHub source</TextLink></li>
				<li><TextLink link="/design-system" >Design system</TextLink></li>
			</ul>
		</footer>
	);
}