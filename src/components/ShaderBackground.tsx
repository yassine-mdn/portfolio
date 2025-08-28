"use client"

import React, {useEffect, useRef} from 'react';

const ShaderBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number | null>(null);
    const programRef = useRef<WebGLProgram | null>(null);
    const glRef = useRef<WebGLRenderingContext | null>(null);

    // Vertex shader (simple quad)
    const vertexShaderSource = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

    // Simple animated gradient shader - easy to build upon
    const fragmentShaderSource = `
    precision highp float;
    uniform vec2 u_resolution;
    uniform float u_time;

    void main() {
      // Normalize coordinates to 0.0 - 1.0
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;

      // Create animated waves
      float wave1 = sin(uv.x * 4.0 + u_time * 2.0) * 0.5 + 0.5;
      float wave2 = cos(uv.y * 3.0 + u_time * 1.5) * 0.5 + 0.5;

      // Distance from center for radial effects
      vec2 center = vec2(0.5, 0.5);
      float dist = length(uv - center);

      // Combine effects
      float pattern = wave1 * wave2;
      float radial = 1.0 - dist;

      // Create color
      vec3 color1 = vec3(0.3, 0.6, 1.0); // Blue
      vec3 color2 = vec3(1.0, 0.4, 0.8); // Pink
      vec3 color3 = vec3(0.2, 0.8, 0.4); // Green

      // Mix colors based on pattern
      vec3 finalColor = mix(color1, color2, pattern);
      finalColor = mix(finalColor, color3, radial * 0.3);

      // Add some brightness variation
      finalColor *= 0.8 + 0.2 * sin(u_time * 3.0);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

    const createShader = (
        gl: WebGLRenderingContext, 
        type: number, 
        source: string
    ): WebGLShader | null => {
        const shader = gl.createShader(type);
        if (!shader) return null;

        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(shader));
            console.error('Source:', source);
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    };

    const createProgram = (
        gl: WebGLRenderingContext, 
        vertexShader: WebGLShader, 
        fragmentShader: WebGLShader
    ): WebGLProgram | null => {
        const program = gl.createProgram();
        if (!program) return null;

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }
        return program;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        glRef.current = gl;

        // Create shaders
        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

        if (!vertexShader || !fragmentShader) return;

        // Create program
        const program = createProgram(gl, vertexShader, fragmentShader);
        if (!program) return;

        programRef.current = program;

        // Create buffer for full-screen quad
        const positionBuffer = gl.createBuffer();
        if (!positionBuffer) {
            console.error('Failed to create buffer');
            return;
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [
            -1, -1,
            1, -1,
            -1, 1,
            -1, 1,
            1, -1,
            1, 1,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        // Get attribute and uniform locations
        const positionAttributeLocation = gl.getAttribLocation(program, 'position');
        const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
        const timeUniformLocation = gl.getUniformLocation(program, 'u_time');

        // Setup
        gl.useProgram(program);
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

        const resizeCanvas = (): void => {
            const displayWidth = canvas.clientWidth;
            const displayHeight = canvas.clientHeight;

            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
        };

        const render = (time: number): void => {
            resizeCanvas();

            // Clear the canvas
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
            gl.uniform1f(timeUniformLocation, time * 0.001);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationRef.current = requestAnimationFrame(render);
        };

        // Start animation
        animationRef.current = requestAnimationFrame(render);

        // Handle window resize
        const handleResize = (): void => resizeCanvas();
        window.addEventListener('resize', handleResize);

        return (): void => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
            style={{background: '#000'}}
        />
    );
};

export default ShaderBackground;
