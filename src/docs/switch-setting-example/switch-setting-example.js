import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { SwitchSetting } from '../../js/components/switch-setting';
import { Preview } from "../../js/components/preview";
import { Title } from "../../js/components/title";
import { Article } from '../../js/components/article';
import source from './README.md';

export const SwitchSettingExample = () => {

	const [preferenceValue, setPreferenceValue] = useState(true);
	const [readme, setReadme] = useState();

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	const togglePreferenceValue = () => {
		setPreferenceValue(!preferenceValue);
	}

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">Switch setting</Title>
			<Preview label="Button" classes="margin-bottom-lg">
				<SwitchSetting
					description="Show completed tasks"
					checked={preferenceValue}
					onChange={togglePreferenceValue}
				/>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);

}