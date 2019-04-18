### Documentation

List item description is an element used to render a simple string description for a list item (for example a task item or setting).

`import { ListItemDescription } from './elements/listItemDescription'`

### Usage

```jsx
<ListItemDescription>Show completed tasks</ListItemDescription>
```

### API

The element accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`children` | Inner content for the desctiption | string | - | Yes | -
`classes` | Allows additional classes to be applied to element | string | - | No | -

### Styling options

The element has no **optional styles**, however helper-classes can be applied by passing `value/s` via the `classes` property.

---