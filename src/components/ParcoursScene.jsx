import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../theme/ThemeContext";

// Animated "parcours" : a winding 3D path with stop nodes and a glowing
// marker travelling along it, evoking a professional journey over time.
export default function ParcoursScene() {
  const mountRef = useRef(null);
  const matsRef = useRef({});
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const getColor = () => {
      const p = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary").trim().split(/\s+/).map(Number);
      return new THREE.Color(p[0] / 255, p[1] / 255, p[2] / 255);
    };
    const color = getColor();

    const group = new THREE.Group();
    scene.add(group);

    const points = [
      new THREE.Vector3(-3.5, -2.0, 0),
      new THREE.Vector3(-1.5, 1.8, 1),
      new THREE.Vector3(0.5, -1.2, -1),
      new THREE.Vector3(2.0, 2.0, 0.5),
      new THREE.Vector3(3.5, -0.3, -0.5),
    ];
    const curve = new THREE.CatmullRomCurve3(points);

    const tubeMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.45 });
    const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 120, 0.04, 8, false), tubeMat);
    group.add(tube);

    const nodeMat = new THREE.MeshBasicMaterial({ color });
    const nodePositions = [0, 0.25, 0.5, 0.75, 1].map((u) => curve.getPointAt(u));
    nodePositions.forEach((pos) => {
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), nodeMat);
      node.position.copy(pos);
      group.add(node);
    });

    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.26, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95 })
    );
    group.add(marker);

    matsRef.current = { tubeMat, nodeMat };

    let raf;
    let paused = false;
    const clock = new THREE.Clock();
    const animate = () => {
      if (paused) return;
      raf = requestAnimationFrame(animate);
      const t = (clock.getElapsedTime() * 0.12) % 1;
      marker.position.copy(curve.getPointAt(t));
      group.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
      group.rotation.x = Math.cos(clock.getElapsedTime() * 0.15) * 0.15;
      renderer.render(scene, camera);
    };
    animate();

    const onVisChange = () => {
      if (document.hidden) {
        paused = true;
        cancelAnimationFrame(raf);
      } else {
        paused = false;
        clock.start();
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

  useEffect(() => {
    const { tubeMat, nodeMat } = matsRef.current;
    if (!tubeMat || !nodeMat) return;
    const p = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary").trim().split(/\s+/).map(Number);
    const c = new THREE.Color(p[0] / 255, p[1] / 255, p[2] / 255);
    tubeMat.color.copy(c);
    nodeMat.color.copy(c);
  }, [theme]);

  return <div className="absolute inset-0" ref={mountRef} />;
}
