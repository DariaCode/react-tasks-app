import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { ListItemContainer } from "../../elements/listItemContainer";
import { Preview } from "../../elements/preview";
import { Title } from "../../elements/title";
import { Article } from '../../elements/article';
import source from './README.md';

export const ListItemContainerExample = () => {

	const [readme, setReadme] = useState();

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">List item container</Title>
			<Preview label="List item container" classes="margin-bottom-lg">
				<ListItemContainer 
					leftSlot={
						<span>Left slot</span>
					}
					rightSlot={
						<span>Right slot</span>
					}
				
				/>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);
}