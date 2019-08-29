### Documentation

Title is an element used to display a title.

`import { Title } from './components/title'`

### Usage

```jsx
<Title>Regular title</Title>
```

### API

The element accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`classes` | Allows additional classes to be applied to the element | string | - | No | -
`element` | Set the `<tag>` element for the title | string | Any valid HTML tag | No | `<p>`
`children` | Inner content for the element | string | - | Yes | -

### Styling options

The element has the following **optional** styles, these options and additional helper-classes can be applied by passing `value/s` via the `classes` property.

Style | Description | Value/s | Default
-|-|-|-
Size | Sets the font size of the title | `size-sm` , `size-reg` , `size-lg` | `size-reg`
Color | Sets the color of the title | `color-primary` , `color-alert` , `color-warning` , `color-success` , `color-light-grey` , `color-medium-grey` , `color-dark-grey` , `color-black` , `color-white` | `color-black`
---