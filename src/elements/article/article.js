import React from 'react';
import './article.scss';

export const Article = props => {
	return(
		<article className={`article ${props.classes}`}>
			{props.children}
		</article>
	);
}

Article.defaultProps = {
	classes: ''
}