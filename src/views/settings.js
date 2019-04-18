import React from "react";
import { AppTitleBar } from "../components/appTitleBar";
import { Container } from '../elements/container';
import { ViewHeader } from '../components/viewHeader';
import { AppSettings } from '../components/appSettings';
import { AppFooter } from '../components/appFooter';
import "./settings.scss";

export const SettingsView = props => {

	return(
		<div className="settings-view">
			<AppTitleBar 
				location={props.location.pathname}
			/>
			<Container classes="no-padding">
				<ViewHeader
					linkLabel="Back to tasks"
					link="/"
					title="Settings"
				/>
				<AppSettings />
				<AppFooter />
			</Container>
		</div>
	);
}