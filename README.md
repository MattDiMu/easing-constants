# easing-constants
Some useful strings to be used in JavaScript for animations with nice easing (=equivalent to transition-timing-function in CSS).

## Env Compatibility
Just import it the way you want. It's available 
- as modern ES-module (webpack, parcel or whatever module bundler you're using) - see `module`-field in package.jsonA
- as "legacy" UMD build - see `browser`-field
- or even for usage in pure nodejs - see `main`-field in package.json

## Usage
```javascript
import EASING from 'easing-constants';

document.body.animate([
    {
        backgroundColor: 'lightblue'
    },
    {
        backgroundColor: 'hotpink'
    },
    {
        backgroundColor: 'lightgreen'
    }
], {
    duration: 2000,
    easing: EASING.IN_OUT_CUBIC,
    fill: "forwards"
})
```
The default export (the EASING-variable above) is an simple object containing currently the following keys:
- `IN_OUT_CUBIC`
- `IN_OUT_QUADRATIC`
- `ACCELERATE_QUADRATIC`
- `ACCELERATE_CUBIC`
- `DECELERATE_QUADRATIC`
- `DECELERATE_CUBIC`


## Development 
- `npm run dev`
- `npm run test`
- `npm run build`

## License
[MIT](LICENSE).
