import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { ButtonSetting } from '../../js/components/button-setting';
import { Preview } from "../../js/components/preview";
import { Title } from "../../js/components/title";
import { Article } from '../../js/components/article';
import source from './README.md';

export const ButtonSettingExample = () => {

	const [readme, setReadme] = useState();

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	const handleOnButtonClick = () => {
		console.log('Setting button clicked');
	}

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">Button setting</Title>
			<Preview label="Button" classes="margin-bottom-lg">
				<ButtonSetting
					description="Delete completed tasks"
					buttonClasses="color-alert"
					disabled={false}
					onClick={handleOnButtonClick}
					buttonLabel="Delete"
				/>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);

}