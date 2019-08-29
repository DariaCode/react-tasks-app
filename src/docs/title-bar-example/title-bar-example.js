import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { Title } from "../../js/components/title";
import { TitleBar } from "../../js/components/title-bar";
import { Preview } from "../../js/components/preview";
import { Article } from '../../js/components/article';
import source from './README.md';

export const TitleBarExample = () => {

	const [readme, setReadme] = useState();

	useEffect (() => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(

		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">Title bar</Title>
			<Preview label="Title bar" classes="margin-bottom-lg">
				<TitleBar
					leftSlot={
						<span className="text-color-white">Left slot</span>
					}
					rightSlot={
						<span className="text-color-white">Right slot</span>
					}
				/>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);
	
}