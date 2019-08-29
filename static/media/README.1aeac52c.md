### Documentation

Task item is a component to contain and render to view a task description and completed state of a user task.

**Note:** This is a controlled component, checked state / value changes need be managed via parent component or a state manager (Redux).

`import { TaskItem } from './components/task-item'`

### Usage

```jsx
<TaskItem
	id={0}
	complete={false}
	description="Wash the car"
	onChange={handleOnTaskChange}
/>
```

### API

The component accepts the following properties:

Property | Description | Type | Value/s | Required | Default
-|-|-|-|-|-
`id` | A unique ID for the too item | int | - | Yes | -
`complete` | The task completed status | bool | - | Yes | false
`description` | The description of the task | string | - | Yes | -
`onChange` | The onChange event callback function | function | - | Yes | -

### Styling options

The component has no **optional** styles, and accepts no helper-classes.

---