### Documentation

List item container is an element used to render a list item (for example a task item or setting). It has two available input slots (left and right aligned).

`import { ListItemContainer } from './components/list-item-container'`

### Usage

```jsx
<ListItemContainer 
	leftSlot={
		<span>Left slot</span>
	}
	rightSlot={
		<span>Right slot</span>
	}
/>
```

### API

The element accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`classes` | Allows additional classes to be applied to element | string | - | No | -
`leftSlot` | Left aligned content area | jsx node | - | No | -
`rightSlot` | Right aligned content area | jsx node | - | No | -

### Styling options

The element has no **optional styles**, however helper-classes can be applied by passing `value/s` via the `classes` property.

---