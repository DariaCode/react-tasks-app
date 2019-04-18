### Documentation

View header is a component used to display a title for the current view with link to re-route the user.

`import { ViewHeader } from './components/viewHeader'`

### Usage

```jsx
<ViewHeader
	linkLabel="Back to tasks"
	link="/"
	title="Settings"
/>
```

### API

The component accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`linkLabel` | The label for the link | string | - | Yes | -
`link` | The internal link URL | string | - | Yes | -
`title` | The main title text | string | - | Yes | -

### Styling options

The component has no **optional** styles, and accepts no helper-classes.

---