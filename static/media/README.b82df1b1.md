### Documentation

Switch is an element used to render and change a boolean value. It is built using native HTML `<input type="checkbox>` and will fire an event onChange.

**Note:** This is a [controlled input element](https://reactjs.org/docs/forms.html), checked state / value changes need be managed via parent component or a state manager (Redux).

`import { Switch } from './components/switch'`

### Usage

```jsx
<Switch 
	classes="margin-bottom-sm" 
	name="demo_switch" 
	checked={switchValues.demo_switch} 
	onChange={handleOnSwitchChange}
/>
```

### API

The element accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`checked` | Sets the switch checked apperance | bool | - | Yes | false
`name` | The name assigned to the switch | string | - | No | -
`classes` | Allows additional classes to be applied to the icon button | string | - | No | -
`disabled` | Option to disable the switch | bool | - | No | false
`onChange` | onChange event callback function | function | - | Yes | -

### Styling options

The element has **no optional styles**, however helper-classes can be applied by passing `value/s` via the `classes` property.

---