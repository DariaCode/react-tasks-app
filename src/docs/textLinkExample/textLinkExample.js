import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { Title } from "../../elements/title";
import { TextLink } from "../../elements/textLink";
import { Preview } from "../../elements/preview";
import { Article } from '../../elements/article';
import source from './README.md';

export const TextLinkExample = () => {

	const [readme, setReadme] = useState();

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">Text link</Title>
			<Preview label="Text link" classes="margin-bottom-lg">
				<TextLink link="/">Back to tasks</TextLink>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);
	
}