import React from "react";
import { Container } from "../elements/container";
import { ViewHeader } from "../components/viewHeader";
import { Title } from "../elements/title";
import { Article } from '../elements/article';
import { TitleBarExample } from "../docs/titleBarExample";
import { TitleExample } from "../docs/titleExample";
import { TextLinkExample } from "../docs/textLinkExample";
import { ButtonExample } from "../docs/buttonExample";
import { IconButtonExample } from "../docs/iconButtonExample";
import { SwitchExample } from "../docs/switchExample";
import { CheckExample } from "../docs/checkExample";
import { ListItemDescriptionExample } from "../docs/listItemDescriptionExample";
import { ListItemContainerExample } from "../docs/listItemContainerExample";
import { ViewHeaderExample } from "../docs/viewHeaderExample";
import { TaskItemExample } from "../docs/taskItemExample";
import { SwitchSettingExample } from "../docs/switchSettingExample";
import { ButtonSettingExample } from "../docs/buttonSettingExample";
import { ScssUtils } from "../docs/scssUtils";
import './docs.scss';

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
