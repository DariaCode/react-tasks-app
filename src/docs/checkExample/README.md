### Documentation

Check is an element used to render and change a boolean value. It is built using native HTML `<input type="checkbox>` and will fire an event onChange.

**Note:** This is a [controlled input element](https://reactjs.org/docs/forms.html), checked state / value changes need be managed via parent component or a state manager (Redux).

`import { Check } from './elements/check'`

### Usage

```jsx
<Check 
	name="demo_check" 
	checked={checkValues.demo_check} 
	onChange={handleOnCheckChange} 
	disabled={false}
/>
```

### API

The element accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`name` | The name assigned to the check | string | - | No | -
`classes` | Allows additional classes to be applied to the check | string | - | No | -
`disabled` | Option to disable the check | bool | - | No | false
`onChange` | onChange event callback function | function | - | No | -
`Checked` | Sets the switch checked attribute and apperance | bool | - | No | false

### Styling options

The element has no **optional styles**, however helper-classes can be applied by passing `value/s` via the `classes` property.

---