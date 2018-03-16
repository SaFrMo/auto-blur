Blur a button or other element automatically when clicked.

## Usage
`npm install auto-blur --save`

In your JS:

```js
import { blur } from 'auto-blur'

// Blur any button after it's clicked
addEventListener('click', evt => blur(evt))
```

or even more simply:

```js
import { autoBlur } from 'auto-blur'

// does the above automatically
autoBlur()
```
