
const vertexShaderText = [
    'precision mediump float;',
    '',
    'attribute vec2 vertPosition;',
    '',
    'void main()', 
    '{',
    '  gl_Position = vec4(vertPosition, 0.0, 1.0);',
    '}'
].join('\n');

const fragmentShaderText = [
    'precision mediump float;',
    '',
    'void main()',
    '{',
    '  gl_FragColor = vec4(0.1, 0.1, 0.9, 1.0);',
    '}'
].join('\n');


const mainGL =  () => {

  const canvas = document.querySelector('#game-surface');
  const gl = canvas.getContext('webgl');

  if(!gl) {
      alert('Your browser does not support GL');
      return;
  }

  gl.clearColor(0.7, 0.8, 0.7, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT );

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   gl.viewport(0, 0, window.innerWidth,window.innerHeight);

//
//Create Shaders
//
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertexShaderText);
    gl.shaderSource(fragmentShader, fragmentShaderText);

    gl.compileShader(vertexShader);
    if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
        return;
    }

    gl.compileShader(fragmentShader);
    if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
        return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program)
    if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Error linking program!', gl.getProgramInfoLog(program));
        return;
    }
};

