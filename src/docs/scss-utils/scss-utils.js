import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { Article } from '../../js/components/article';
import source from './README.md';

export const ScssUtils = () => {

	const [readme, setReadme] = useState();

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(
		<React.Fragment>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);
}