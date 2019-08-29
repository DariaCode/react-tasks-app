### Documentation

Button setting is a component to render to view a setting preference action, which is dispatched using a button.

`import { ButtonSetting } from './components/button-setting'`

### Usage

```jsx
<ButtonSetting
	description="Delete completed tasks"
	buttonClasses="color-alert"
	disabled={false}
	onClick={handleOnButtonClick}
	buttonLabel="Delete"
/>
```

### API

The component accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`description` | A description for the setting | string | - | Yes | -
`buttonClasses` | Button styling classes as per `button` element | string | - | No | Default `button` element styles
`disabled` | Set the button disabled state | bool | - | No | false
`buttonLabel` | The label for the button | string | - | Yes | -
`onClick` | The onClick event callback function | function | - | Yes | -

### Styling options

The component has no **optional** styles, and accepts no helper-classes.

---