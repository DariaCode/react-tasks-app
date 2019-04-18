### Documentation

TitleBar is a container for application UI elements. It spans the entire viewport width, has the option to be fixed to the top of the viewport and has two available input slots (left and right aligned).

`import { TitleBar } from './elements/titleBar'`

### Usage

```jsx
<TitleBar
	leftSlot={
		<span className="text-color-white">Left slot</span>
	}
	rightSlot={
		<span className="text-color-white">Right slot</span>
	}
/>
```

### API

The element accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`classes` | Allows additional classes to be applied to the container | String | - | No | -
`leftSlot` | Left aligned area for title bar content | jsx node | - | No | -
`rightSlot` | Right aligned area for title bar content | jsx node | - | No | -

### Styling options

The element has the following **optional** styles, these options and additional helper-classes can be applied by passing `value/s` via the `classes` property.

Style | Description | Value/s | Default
-|-|-
Position | Fixes the titleBar to the top of the viewport | `is-fixed` | Static

---