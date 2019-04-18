import React from "react";
import { AppTitleBar } from "../components/appTitleBar";
import { AddTaskItem } from "../components/addTaskItem";
import { TasksList }from "../components/tasksList";
import { Container } from '../elements/container';
import "./main.scss";

export const MainView = props => {

	return(
		<div className="main-view">
			<AppTitleBar 
				location={props.location.pathname}
			/>
			<Container classes="no-padding">
				<AddTaskItem />
				<TasksList />
			</Container>
		</div>
	);
}