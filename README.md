Blur a button or other element automatically when clicked.

## Usage
`npm install blur-button --save`

In your JS:

```js
import { blur } from 'blur-button'

// Blur any button after it's clicked
addEventListener('click', evt => blur(evt))
```

or even more simply:

```js
import { autoBlur } from 'blur-button'

// does the above automatically
autoBlur()
```
