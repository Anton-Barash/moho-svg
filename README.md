# Moho svg
``` npm i moho-svg ```
+ With this NPM, you can control the animation of SVG files created with MOHO.

[https://mohosvg.herokuapp.com](https://mohosvg.herokuapp.com)

   


```
import React from 'react'
import { mohoSvg } from './npm';
```

```
let mohoSvgValues = [
[ "#121313", "#c92c2c", "#1b99c2", "#1b99c2"],
["evenodd", "evenodd", "evenodd", "evenodd"],
[ "#00000000", "#00000000", "#00000000", "#00000000"],
[ "M 50.955 22.147 C 60.395 22.147 66.019 21.378 68.760 24.781 C 70.296 26.687 70.969 29.768 70.969 34.851 C 70.969 40.806 69.011 43.248 68.017 45.675 C 64.673 53.843 71.142 79.747 52.087 80.386 C 32.241 81.052 37.142 53.922 33.833 45.623 C 32.840 43.134 30.941 40.660 30.941 34.851 C 30.941 28.606 31.956 25.383 34.204 23.784 C 37.333 21.556 42.677 22.147 50.955 22.147 Z",
"M 52.249 52.875 C 57.921 52.864 66.923 38.273 69.246 39.498 C 70.564 40.194 72.943 48.413 72.909 51.509 C 72.828 58.984 64.675 77.079 61.386 77.211 C 59.933 77.270 55.360 68.337 52.228 68.580 C 49.247 68.812 46.175 77.765 44.831 77.807 C 41.266 77.918 32.421 58.426 32.720 50.700 C 32.837 47.686 36.131 40.857 37.439 40.603 C 39.593 40.183 47.519 52.884 52.249 52.875 Z",
"M 50.470 28.939 C 50.470 28.941 58.733 44.996 58.733 44.997 C 58.734 44.998 72.908 51.508 72.909 51.509 C 72.909 51.511 65.106 74.460 65.105 74.462 C 65.105 74.460 52.250 56.775 52.249 56.774 C 52.248 56.775 38.362 73.762 38.361 73.764 C 38.361 73.762 32.721 50.702 32.720 50.700 C 32.721 50.700 46.009 44.485 46.010 44.485 C 46.011 44.483 50.469 28.940 50.470 28.939 Z",
"M 50.470 28.939 C 50.470 28.941 58.733 44.996 58.733 44.997 C 58.734 44.998 72.908 51.508 72.909 51.509 C 72.909 51.511 65.106 74.460 65.105 74.462 C 65.105 74.460 52.250 56.775 52.249 56.774 C 52.248 56.775 38.362 73.762 38.361 73.764 C 38.361 73.762 32.721 50.702 32.720 50.700 C 32.721 50.700 46.009 44.485 46.010 44.485 C 46.011 44.483 50.469 28.940 50.470 28.939 Z"
]]
```

```
const svg = (mohoSvgValues) => {
return <svg id="Frame_6" width="100px" height="100px"> <path> <animate attributeName="fill" values={mohoSvgValues[0]} begin="0" dur="3" repeatCount="indefinite" /> <animate attributeName="fill-rule" values={mohoSvgValues[1]} begin="0" dur="3" repeatCount="indefinite" /> <animate attributeName="stroke" values={mohoSvgValues[2]} begin="0" dur="3" repeatCount="indefinite" /> <animate attributeName="d" values={mohoSvgValues[3]} begin="0" dur="3" repeatCount="indefinite" /></path> </svg>
}
```

```
export default function MohoSvg(props) {

    return (
        <>
            {mohoSvg(svg, mohoSvgValues, props.i)}
        </>
    )
}
```
