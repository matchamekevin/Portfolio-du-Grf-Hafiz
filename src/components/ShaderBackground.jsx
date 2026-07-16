import { useEffect, useRef } from "react";
import { useTheme } from "../theme/ThemeContext";

const VS = `attribute vec2 a_position; varying vec2 v_texCoord; void main(){ v_texCoord = a_position*0.5+0.5; gl_Position = vec4(a_position,0.0,1.0); }`;
const FS = `precision highp float; uniform float u_time; uniform vec2 u_resolution; uniform vec2 u_mouse; uniform vec3 u_color1; uniform vec3 u_color2; varying vec2 v_texCoord; void main(){ vec2 uv=v_texCoord; vec2 center=u_mouse/u_resolution; if(length(u_mouse)<0.1) center=vec2(0.5); float d=length(uv-center); float wave=sin(d*20.0-u_time*2.0)*0.5+0.5; wave*=exp(-d*3.0); float noise=sin(uv.x*50.0+u_time)*cos(uv.y*30.0-u_time*0.5); vec3 finalColor=mix(u_color1,u_color2, wave*0.15+noise*0.02); gl_FragColor=vec4(finalColor,1.0); }`;

function readVec(name) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
    .split(/\s+/)
    .map(Number);
}

export default function ShaderBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const applyRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    const syncSize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    if (typeof ResizeObserver !== "undefined") new ResizeObserver(syncSize).observe(canvas);
    syncSize();

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uColor1 = gl.getUniformLocation(prog, "u_color1");
    const uColor2 = gl.getUniformLocation(prog, "u_color2");

    const apply = () => {
      const b = readVec("--shader-base");
      const a = readVec("--shader-accent");
      gl.uniform3f(uColor1, b[0], b[1], b[2]);
      gl.uniform3f(uColor2, a[0], a[1], a[2]);
    };
    apply();
    applyRef.current = apply;

    let mouse = { x: 0, y: 0 };
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      if (r.width && r.height) {
        mouse.x = ((e.clientX - r.left) / r.width) * canvas.width;
        mouse.y = (1 - (e.clientY - r.top) / r.height) * canvas.height;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf;
    let paused = false;
    const render = (t) => {
      if (paused) return;
      if (typeof ResizeObserver === "undefined") syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uTime, t * 0.001);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };
    render(0);

    const onVisChange = () => {
      if (document.hidden) {
        paused = true;
        cancelAnimationFrame(raf);
      } else {
        paused = false;
        raf = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVisChange);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisChange);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  // Re-sync shader colors whenever the theme flips (CSS vars change).
  // rAF ensures the html class is already applied before we read the vars.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (applyRef.current) applyRef.current();
    });
    return () => cancelAnimationFrame(id);
  }, [theme]);

  return <canvas id="wave-background" ref={canvasRef} />;
}
