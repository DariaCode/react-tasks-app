### Documentation

Switch setting is a component to render to view a setting preference (boolean), which is represented by a switch toggle. The user can change the preference value by toggling the switch.

**Note:** This is a controlled component, checked state / value changes need be managed via parent component or a state manager (Redux).

`import { SwitchSetting } from './components/switch-setting'`

### Usage

```jsx
<SwitchSetting
	description="Show completed tasks"
	checked={true}
	onChange={handleOnChange}
/>
```

### API

The component accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`description` | A description for the setting | string | - | Yes | -
`checked` | The initial switch checked status | bool | - | Yes | -
`onChange` | The onChange event callback function | function | - | Yes | -
`disabled` | Set the switch disabled state | bool | - | No | false

### Styling options

The component has no **optional** styles, and accepts no helper-classes.

---