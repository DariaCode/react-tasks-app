import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { Title } from "../../js/components/title";
import { Preview } from "../../js/components/preview";
import { Article } from '../../js/components/article';
import source from './README.md';

export const TitleExample = () => {

	const [readme, setReadme] = useState();

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">Title</Title>
			<Preview label="Title" classes="margin-bottom-lg">
				<Title classes="size-sm">Small title</Title>
				<br/>
				<Title>Regular title</Title>
				<br/>
				<Title classes="size-lg">Large title</Title>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);
	
}