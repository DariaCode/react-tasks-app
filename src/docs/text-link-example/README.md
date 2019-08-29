### Documentation

Text link is an element used to provide a routing link (internal or external), which uses react-router.

`import { TextLink } from './components/text-link'`

### Usage

```jsx
<TextLink link="/">Back to tasks</TextLink>
```

### API

The element accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`classes` | Allows additional classes to be applied to the container | string | - | No | -
`link` | URL for the link | string | - | Yes | -
`external` | Required for external links, changes the tag to an `<a>` and opens `link` URL in a new tab | bool | - | No | false

### Styling options

The element has the following **optional** styles, these options and additional helper-classes can be applied by passing `value/s` via the `classes` property.

Style | Description | Value/s | Default
-|-|-|-
Color | Sets the color of the link | `color-primary` , `color-alert` , `color-warning` , `color-success` , `color-light-grey` , `color-medium-grey` , `color-dark-grey` , `color-black` , `color-white` | `color-primary`

---