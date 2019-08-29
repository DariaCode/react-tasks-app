import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { IconButton } from "../../js/components/icon-button";
import { Preview } from "../../js/components/preview";
import { Title } from "../../js/components/title";
import { Article } from '../../js/components/article';
import source from './README.md';

export const IconButtonExample = () => {

	const [readme, setReadme] = useState();

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	const handleOnButtonClick = e => {
		console.log(`${e.currentTarget.getAttribute("name")} click event fired`);
	}

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">Icon button</Title>
			<Preview label="Icon button" classes="margin-bottom-lg">
				<IconButton name="reg-icon-button" iconName="user" classes="margin-bottom-sm" onClick={handleOnButtonClick}/>
				<br/>
				<IconButton name="lg-icon-button" iconName="user" classes="size-lg margin-bottom-sm" onClick={handleOnButtonClick}/>
				<br/>
				<IconButton name="inverted-icon-button" iconName="user" classes="inverted margin-bottom-sm" onClick={handleOnButtonClick}/>
				<br/>
				<IconButton name="link-icon-button" link="/" iconName="user" classes="margin-bottom-sm" />
				<br/>
				<IconButton name="diasbled-icon-button" disabled={true} iconName="user" onClick={handleOnButtonClick}/>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);
	
}