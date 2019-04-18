import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { ListItemDescription } from "../../elements/listItemDescription";
import { Preview } from "../../elements/preview";
import { Title } from "../../elements/title";
import { Article } from '../../elements/article';
import source from './README.md';

export const ListItemDescriptionExample = () => {

	const [readme, setReadme] = useState();

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">List item description</Title>
			<Preview label="List item description" classes="margin-bottom-lg">
				<ListItemDescription>Show completed tasks</ListItemDescription>
				<ListItemDescription classes="text-strikethrough">Wash the car</ListItemDescription>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);
}