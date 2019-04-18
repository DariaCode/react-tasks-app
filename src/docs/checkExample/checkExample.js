import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { Check } from "../../elements/check";
import { Preview } from "../../elements/preview";
import { Title } from "../../elements/title";
import { Article } from '../../elements/article';
import source from './README.md';

export const CheckExample = () => {

	const checks = {
		demo_check: false,
		demo_disabled_check: true
	}

	const [checkValues, setCheckValues] = useState(checks);
	const [readme, setReadme] = useState();

	const handleOnCheckChange = e => {
		setCheckValues({...checkValues, [e.currentTarget.name]: e.currentTarget.checked });
		console.log(`${e.currentTarget.getAttribute("name")} change event fired`);
		console.log(`${e.currentTarget.getAttribute("name")} value is ${e.currentTarget.checked}`);
	}

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">Check</Title>
			<Preview label="Check" classes="margin-bottom-lg">
				<Check name="demo_check" checked={checkValues.demo_check} onChange={handleOnCheckChange} />
				<br/>
				<Check name="demo_disabled_check" checked={checkValues.demo_disabled_check} onChange={handleOnCheckChange} disabled={true}/>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);

}