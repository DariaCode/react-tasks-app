import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { Button } from "../../elements/button";
import { Preview } from "../../elements/preview";
import { Title } from "../../elements/title";
import { Article } from '../../elements/article';
import source from './README.md';

export const ButtonExample = () => {

	const [readme, setReadme] = useState();

	const handleOnButtonClick = e => {
		console.log(`${e.currentTarget.getAttribute("name")} click event fired`);
	}

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">Button</Title>
			<Preview label="Button" classes="margin-bottom-lg">
				<Button name="reg-button" classes="margin-bottom-sm" onClick={handleOnButtonClick}>Regular button</Button> 
				<br/>
				<Button name="lg-button" classes="size-lg margin-bottom-sm" onClick={handleOnButtonClick}>Large button</Button>
				<br/>
				<Button name="inverted-button" classes="inverted margin-bottom-sm" onClick={handleOnButtonClick}>Inverted button</Button>
				<br/>
				<Button classes="margin-bottom-sm" link="/">Link buton</Button>
				<br/>
				<Button name="disabled-button" disabled={true} onClick={handleOnButtonClick}>Disabled button</Button>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);
	
}