import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../theme/ThemeContext";

export default function ThreeScene() {
  const mountRef = useRef(null);
  const materialRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.5, 15);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff9f0a, wireframe: true, transparent: true, opacity: 0.7,
      emissive: 0xff9f0a, emissiveIntensity: 0.5
    });
    materialRef.current = material;
    const soundSphere = new THREE.Mesh(geometry, material);
    scene.add(soundSphere);
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));
    camera.position.z = 4;

    const applyColor = () => {
      const p = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary").trim().split(/\s+/).map(Number);
      material.color.setRGB(p[0] / 255, p[1] / 255, p[2] / 255);
      material.emissive.setRGB(p[0] / 255, p[1] / 255, p[2] / 255);
    };
    applyColor();

    const original = geometry.attributes.position.array.slice();
    let raf;
    let paused = false;
    const animate = () => {
      if (paused) return;
      const time = Date.now() * 0.001;
      raf = requestAnimationFrame(animate);
      const pos = geometry.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        const x = original[i], y = original[i + 1], z = original[i + 2];
        const o = Math.sin(x * 2 + y * 3 + time * 2) * 0.1;
        pos[i] = x + (x / 1.5) * o;
        pos[i + 1] = y + (y / 1.5) * o;
        pos[i + 2] = z + (z / 1.5) * o;
      }
      geometry.attributes.position.needsUpdate = true;
      soundSphere.rotation.y += 0.005;
      soundSphere.rotation.z += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    const onVisChange = () => {
      if (document.hidden) {
        paused = true;
        cancelAnimationFrame(raf);
      } else {
        paused = false;
        animate();
      }
    };
    document.addEventListener("visibilitychange", onVisChange);

    const onResize = () => {
      const w = container.clientWidth, h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisChange);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Re-apply sphere color when theme changes.
  useEffect(() => {
    const container = mountRef.current;
    if (!container || !materialRef.current) return;
    const p = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary").trim().split(/\s+/).map(Number);
    materialRef.current.color.setRGB(p[0] / 255, p[1] / 255, p[2] / 255);
    materialRef.current.emissive.setRGB(p[0] / 255, p[1] / 255, p[2] / 255);
  }, [theme]);

  return <div className="absolute inset-0" ref={mountRef} />;
}
