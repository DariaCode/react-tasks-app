import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { ViewHeader } from "../../components/viewHeader";
import { Preview } from "../../elements/preview";
import { Title } from "../../elements/title";
import { Article } from '../../elements/article';
import source from './README.md';

export const ViewHeaderExample = () => {

	const [readme, setReadme] = useState();

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">View header</Title>
			<Preview label="View header" classes="margin-bottom-lg">
				<ViewHeader
					linkLabel="Back to tasks"
					link="/"
					title="Settings"
				/>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);
	
}