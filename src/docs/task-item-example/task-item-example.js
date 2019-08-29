import React, {useEffect, useState} from "react";
import ReactMarkdown from 'react-markdown';
import { TaskItem } from "../../js/components/task-item";
import { Preview } from "../../js/components/preview";
import { Title } from "../../js/components/title";
import { Article } from '../../js/components/article';
import source from './README.md';

export const TaskItemExample = () => {

	const taskData = {
		id: 0,
		complete: false,
		description: "Wash the car"
	}

	const [tasks, setTasks] = useState(taskData);
	const [readme, setReadme] = useState();

	const handleOnTaskChange = e => {
		console.log(`Task ID ${e.currentTarget.getAttribute("name")} completed: ${e.currentTarget.checked}`);
		setTasks({...tasks, complete: !tasks.complete});
	}

	useEffect( () => {
		fetch(source)
      .then(res => res.text())
      .then(post => setReadme(post))
      .catch((err) => console.error(err));
	});

	return(
		<React.Fragment>
			<Title element="h2" classes="margin-bottom-lg">Task item</Title>
			<Preview label="Task item" classes="margin-bottom-lg">
				<TaskItem
					key={tasks.id}
					id={tasks.id}
					complete={tasks.complete}
					onChange={handleOnTaskChange}
					description={tasks.description}
				/>
			</Preview>
			<Article classes="margin-bottom-lg"> 
				<ReactMarkdown source={readme} />
			</Article>
		</React.Fragment>
	);
	
}