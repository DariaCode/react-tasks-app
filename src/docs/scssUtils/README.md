### Global variables

To reduce repitition and automate many helper utilities, the design system is built on top of a set of pre-defined global variables. They include maps for breakpoints and theme colors, which define many of the available helper classes.  

**Located at:**  

`/src/styles/util/_globalVariables.scss`

--- 

### Functions

A selection of SCSS helper functions are available to assist in the styling of our elements and components.

**Located at:**  

`/src/styles/util/_functions.scss`

#### Tint

```scss
tint($color, $percent)
```

Add a percentage of white to a passed color

Parameter | Description | Type
-|-|-
color | The color to be tinted | Any valid CSS color
percent | The perecentate of white to tint | A percentage value between 0 - 100

#### Shade

```scss
shade($color, $percent)
```

Add a percentage of black to a passed color

Parameter | Description | Type
-|-|-
color | The color to be shaded | Any valid CSS color
percent | The perecentate of black to shade | A percentage value between 0 - 100

#### Invert color

```scss
set-color-invert($color)
```

Return an inverted color (white or black) from a provided color

Parameter | Description | Type
-|-|-
color | The color to calculate the inversion from | Any valid CSS color

#### Strip unit

```scss
strip-unit($number)
```

Strips a unit from a provided numeric value and returns a unitless value

Parameter | Description | Type
-|-|-
number | The number to strip a unit from | A valid numerial unit

#### Rem calc

```scss
rem-calc($size)
```

Converts and returns a rem unit from a given pixel value and returns 

Parameter | Description | Type
-|-|-
size | The value to convert to rem | Integer value

---

### Mixins

A selection of SCSS helper mixins are available to assist in the styling of our elements and components.

#### Breakpoint

```scss
@include breakpoint($label) {

}
```

Returns a media query for a given breakpoint value as defined in the global variables `$breakpoints` map. 

Parameter | Description | Type
-|-|-
label | A breakpoint value from the global variables `$breakpoints` map | String

--- 

### Helper classes

A selection of helper classes are available to assist in the styling of our elements and components.

#### Margins

Apply margins to an element based on available margin sizes as defined in the global variables `$margin-sizes` map.

```html
<div className="margin-bottom-sm"></div>
```

Parameter | Description | Type | Value/s
-|-|-|-
className | The axis for the margin and its given `${size}` as per the global variables `$margin-sizes` map | String | `margin-top-${size}` , `margin-right-${size}` , `margin-bottom-${size}` , `margin-left-${size}`, `margin-all-${size}`

#### Background color

Apply a background color to an element based on available colors as defined in the global variables `$theme-colors` map.

```html
<div className="bg-color-primary"></div>
```

Parameter | Description | Type | Value/s
-|-|-|-
className | The background color `${label}` as per the global variables `$theme-colors` map | String | `bg-color-${label}`

#### Text color

Apply a text color to an element based on available colors as defined in the global variables `$theme-colors` map.

```html
<p className="text-color-alert">Alert text!</p>
```

Parameter | Description | Type | Value
-|-|-|-
className | The text color `${label}` as per the global variables `$theme-colors` map | String | `text-color-${label}`

#### Text styles

Apply various text styles by passing the following helper classes

Style | Description | Value/s
-|-|-|-
Strikethrough | Places a strikethrough over a given text element | `text-strikethrough`
Italic | Sets a given text element to italic | `text-italic`
Bold | Sets a given text element to bold | `text-bold`
Alignment | Aligns a given text element | `text-align-left` , `text-align-center` , `text-align-right` , `text-align-justify`

