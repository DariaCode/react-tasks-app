import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { ViewHeader } from "../../js/components/view-header";
import { Preview } from "../../js/components/preview";
import { Title } from "../../js/components/title";
import { Article } from '../../js/components/article';
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