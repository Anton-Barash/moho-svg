declare const interpolation: {
  /**
		Interpolation of array values.
	+ svgValuesArr - array [ [string, string, ...],[string, string, ...] ]
	+ nowFrameNumber - current frame number (>=0, <=fps)
	+ fps—Frames Per interval (Second)
	+ fromFrame - starting frame of interpolation (>=0)
	+ toFrame - fingish interpolation frame (>=0)

	  @returns array
	  @example
	  ```
	  import { interpolation } from 'moho-svg';
  
	  const arr=[["2","4"],["#ffffff","#000000"]]

	let a=	interpolation(arr, 2, 4, 0, 1)
	console.log(a)// ['3', '#808080']
	  ```
	  */
  (
    svgValuesArr: string[],
    nowFrameNumber: number,
    fps: number,
    fromFrame: number,
    toFrame: number
  ): [];
};

declare const mohoSvg: {
  /**
	  Detect the dominant newline character of a string.
  
	  @returns The detected newline or `undefined` when no newline character is found.
  
	  @example
	  ```
	  import mohoSvg = require('detect-newline');
  
	  mohoSvg('foo\nbar\nbaz\r\n');
	  //=> '\n'
	  ```
	  */
  (string: string): "\r\n" | "\n" | undefined;

  /**
	  Detect the dominant newline character of a string.
  
	  @returns The detected newline or `\n` when no newline character is found or the input is not a string.
	  */
};

export { mohoSvg, interpolation };
