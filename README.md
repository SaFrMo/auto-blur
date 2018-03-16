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

## API
* `blur(event, tag = 'BUTTON')`
    * `event` - Event, required
    * `tag` - String, optional. Default `BUTTON`. Name of the tag to look for and blur.

Blur an element if it exists in a specific event. Pass the event to this function - if the given `tag` exists within the event's hierarchy, `blur` will blur that tag immediately.

* `autoBlur(tag = 'BUTTON')`
    * `tag` - String, optional. Default `BUTTON`. Name of the tag to look for and blur.

Attaches a click event listener to the window and blurs the given `tag` if it exists anywhere within the click event target's hierarchy.

## Why?
I like styling both `hover` and `focus` states in CSS, so that users who don't use a mouse can have the same hover experience as users who do:

```css
button:hover,
button:focus {
    background-color: black;
    color: white;
    outline: none; /* remove the default :focus outline */
}
```

But when you style like this, clicking any link will make it retain the `:focus` state.

`auto-blur` is a tiny solution to this problem that listens for click events, finds the `target` of those events, and searches the `target`'s hierarchy for a given `tag`. If that `tag` is found, it is blurred immediately, preventing holdover `focus` states.

## Issues/Questions
Please feel free to submit issues for problems or questions, I'm happy to help!
