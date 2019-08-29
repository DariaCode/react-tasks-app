import React from "react";
import { AppTitleBar } from "../app-title-bar";
import { Container } from '../container';
import { ViewHeader } from '../view-header';
import { AppSettings } from '../app-settings';
import { AppFooter } from '../app-footer';

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