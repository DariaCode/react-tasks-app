import React from "react";
import { Container } from "../container";
import { ViewHeader } from "../view-header";
import { Title } from "../title";
import { Article } from '../article';
import { TitleBarExample } from "../../../docs/title-bar-example";
import { TitleExample } from "../../../docs/title-example";
import { TextLinkExample } from "../../../docs/text-link-example";
import { ButtonExample } from "../../../docs/button-example";
import { IconButtonExample } from "../../../docs/icon-button-example";
import { SwitchExample } from "../../../docs/switch-example";
import { CheckExample } from "../../../docs/check-example";
import { ListItemDescriptionExample } from "../../../docs/list-item-description-example";
import { ListItemContainerExample } from "../../../docs/list-item-container-example";
import { ViewHeaderExample } from "../../../docs/view-header-example";
import { TaskItemExample } from "../../../docs/task-item-example";
import { SwitchSettingExample } from "../../../docs/switch-setting-example";
import { ButtonSettingExample } from "../../../docs/button-setting-example";
import { ScssUtils } from "../../../docs/scss-utils";

export const DocsView = () => {

	return (
		<div className="docs-view">
			<Container classes="margin-bottom-lg margin-top-lg">
				<ViewHeader
					classes="margin-bottom-lg"
					title="Design system"
					link="/"
					linkLabel="Back to app"
					element="h1"
				/>
				<Article>
					<Title classes="size-lg margin-bottom-sm" element="h2">Elements</Title>
					<p>Elements are the builing blocks of the design system. They are singular items, when grouped they can be used to build a component.</p><hr/>
				</Article>
				<TitleBarExample />
				<TitleExample />
				<TextLinkExample />
				<ButtonExample />
				<IconButtonExample />
				<SwitchExample />
				<CheckExample />
				<ListItemDescriptionExample />
				<ListItemContainerExample />
				<Article>
					<Title classes="size-lg margin-bottom-sm" element="h2">Components</Title>
					<p>Components are a collection of elements and sometimes also other components.</p><hr/>
				</Article>
				<ViewHeaderExample />
				<TaskItemExample />
				<SwitchSettingExample />
				<ButtonSettingExample />
				<Article>
					<Title classes="size-lg margin-bottom-sm" element="h2">SCSS utilities</Title>
					<p>The design system comes with additional helper utilities for styling our elements and components.</p><hr/>
				</Article>
				<ScssUtils />
			</Container>
		</div>
	);
}
