### Documentation

Icon button is an element for user interaction. It should be used for invoking an event / action or for links. Icons use [Font Awesome](https://fontawesome.com/) and require adding to the library before use.

`import { IconButton } from './components/icon-button'`

### Usage

```jsx
<IconButton 
	name="reg-icon-button" 
	iconName="user" 
	classes="margin-bottom-sm" 
	onClick={handleOnButtonClick}
/> 
```

### API

The element accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`name` | The name assigned to the icon button | string | - | No | -
`type` | The type, can be button or submit if being used with a form | string | - | No | -
`classes` | Allows additional classes to be applied to the icon button | string | - | No | -
`disabled` | Option to disable the icon button | bool | - | No | false
`onClick` | onClick event callback function | function | - | No | -
`link` | Converts the `<button>` to an `<a>` for using with internal / external links | string | - | No | -
`external` | To be used with `link` prop, if true the link will open in a new tab | bool | - | No | false
`icon` | Used to define the Font Awesome icon (must be added to library) | string | A valid Font Awesome icon name | Yes | -

### Styling options

The element has the following **optional** styles, these options and additional helper-classes can be applied by passing `value/s` via the `classes` property.

Style | Description | Value/s | Default
-|-|-|-
Color | Sets the background color of the button, text color is set dynamically based of luminance of the background color. | `color-primary` , `color-alert` , `color-warning` , `color-success` , `color-light-grey` , `color-medium-grey` , `color-dark-grey` , `color-black` , `color-white` | `color-primary`
Size | Set the size of the button | `size-reg` , `size-lg` | `size-reg`
Inverted | Inverts the button background and text colors (use with a color class for additonal text colors) | `inverted` | -
---