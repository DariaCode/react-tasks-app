import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { Switch } from "../../elements/switch";
import { Preview } from "../../elements/preview";
import { Title } from "../../elements/title";
import { Article } from '../../elements/article';
import source from './README.md';

export const SwitchExample = () => {

	const switches = {
		demo_switch: false,
		demo_disabled_switch: true
	}

	const [switchValues, setSwitchValues] = useState(switches);
	const [readme, setReadme] = useState();

	const handleOnSwitchChange = e => {
		setSwitchValues({...switchValues, [e.currentTarget.name]: e.currentTarget.checked });
		console.log(`${e.currentTarget.getAttribute("name")} change event fired`);
		console.log(`${e.currentTarget.getAttribute("name")} value is ${e.currentTarget.checked}`);
	}

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">Switch</Title>
			<Preview label="Switch" classes="margin-bottom-lg">
				<Switch classes="margin-bottom-sm" name="demo_switch" checked={switchValues.demo_switch} onChange={handleOnSwitchChange}/>
				<br/>
				<Switch name="demo_disabled_switch" checked={switchValues.demo_disabled_switch} disabled={true} onChange={handleOnSwitchChange}/>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);

}