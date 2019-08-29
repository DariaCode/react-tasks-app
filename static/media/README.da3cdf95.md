### Documentation

Button is an element for user interaction. It should be used for invoking an event / action or for links.

`import { Button } from './components/button'`

### Usage

```jsx
<Button 
	name="reg-button" 
	classes="margin-bottom-sm" 
	onClick={handleOnButtonClick}
>
Regular button
</Button> 
```

### API

The element accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`name` | The name assigned to the button | string | - | No | -
`type` | The type, can be button or submit if being used with a form | string | - | No | -
`classes` | Allows additional classes to be applied to the button | string | - | No | -
`disabled` | Option to disable the button | bool | - | No | false
`onClick` | onClick event callback function | function | - | No | -
`link` | Converts the `<button>` to an `<a>` for using with internal / external links | string | - | No | -
`external` | To be used with `link` prop, if true the link will open in a new tab | bool | - | No | false 

### Styling options

The element has the following **optional** styles, these options and additional helper-classes can be applied by passing `value/s` via the `classes` property.

Style | Description | Value/s | Default
-|-|-|-
Color | Sets the background color of the button, text color is set dynamically based of luminance of the background color. | `color-primary` , `color-alert` , `color-warning` , `color-success` , `color-light-grey` , `color-medium-grey` , `color-dark-grey` , `color-black` , `color-white` | `color-primary`
Size | Set the size of the button | `size-reg` , `size-lg` | `size-reg`
Inverted | Inverts the button background and text colors (use with a color class for additonal text colors) | `inverted` | -
Width | Sets the button to a fluid width of 100% with centered text | `full-width` | auto
---