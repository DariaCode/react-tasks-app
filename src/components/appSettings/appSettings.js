import React from 'react';
import { connect } from 'react-redux';
import { 
	toggleShowCompletedTasks,
	toggleDarkMode,
	deleteCompletedTasks,
	deleteAllTasks
} from '../../redux/actions';
import { SwitchSetting } from '../../components/switchSetting';
import { ButtonSetting } from '../../components/buttonSetting';

const AppSettings = props => {

	return(
		<div className="settings">
			<SwitchSetting
				description="Show completed tasks"
				checked={props.showCompletedTasks}
				onChange={props.toggleShowCompletedTasks}
			/>
			{/*
			<SwitchSetting
				description="Dark mode"
				checked={props.darkMode}
				onChange={props.toggleDarkMode}
			/>
			*/}
			<ButtonSetting
				description="Delete completed tasks"
				buttonClasses="color-alert"
				onClick={props.onDeleteCompletedTasks}
				buttonLabel="Delete"
				disabled={ props.completedTasksCount > 0 ? false : true }
				/>
				<ButtonSetting
				description="Delete all tasks"
				buttonClasses="color-alert"
				onClick={props.onDeleteAllTasks}
				buttonLabel="Delete all"
				disabled={ props.tasksCount > 0 ? false : true }
				/>
		</div>
	)

}

// Map our state to props
const mapStateToProps = state => {
	return {
		completedTasksCount: state.tasks.filter(task => task.completed).length,
		tasksCount: state.tasks.length,
		showCompletedTasks : state.preferences.showCompletedTasks,
		darkMode: state.preferences.darkMode
	}
}

// Map our dispatch to props
const mapDispatchToProps = dispatch => {
	return {
		toggleShowCompletedTasks: () => dispatch(toggleShowCompletedTasks()),
		toggleDarkMode: () => dispatch(toggleDarkMode()),
		onDeleteCompletedTasks: () => dispatch(deleteCompletedTasks()),
		onDeleteAllTasks: () => dispatch(deleteAllTasks())
	}
}

// Connect our AppSettings component to the store
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppSettings)