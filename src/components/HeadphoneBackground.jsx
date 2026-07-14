import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../theme/ThemeContext";

// Build a stylized headphone from primitives (no external model asset).
function buildHeadphone(material) {
  const group = new THREE.Group();

  // Headband: upper semicircle arch
  const band = new THREE.Mesh(
    new THREE.TorusGeometry(1.0, 0.10, 18, 90, Math.PI),
    material
  );
  group.add(band);

  // Ear cups + cushions + slider arms on each side
  [-1, 1].forEach((side) => {
    const x = side * 1.0;

    const cup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 0.45, 36),
      material
    );
    cup.rotation.z = Math.PI / 2; // axis along X so faces point sideways
    cup.position.set(x, -0.12, 0);
    group.add(cup);

    const cushion = new THREE.Mesh(
      new THREE.TorusGeometry(0.5, 0.16, 18, 44),
      material
    );
    cushion.rotation.y = Math.PI / 2; // ring faces ±X
    cushion.position.set(x, -0.12, 0);
    group.add(cushion);

    const arm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 0.42, 16),
      material
    );
    arm.position.set(x, -0.1, 0);
    group.add(arm);
  });

  return group;
}

export default function HeadphoneBackground() {
  const canvasRef = useRef(null);
  const materialRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const material = new THREE.MeshBasicMaterial({
      color: 0xff9f0a,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    materialRef.current = material;

    const headphone = buildHeadphone(material);
    headphone.scale.setScalar(1.6);
    scene.add(headphone);

    const applyColor = () => {
      const p = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim()
        .split(/\s+/)
        .map(Number);
      material.color.setRGB(p[0] / 255, p[1] / 255, p[2] / 255);
    };
    applyColor();

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    // Scroll drives the rotation target.
    let targetY = 0;
    let targetX = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      targetY = p * Math.PI * 2.5;
      targetX = p * Math.PI * 0.6;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let raf;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      // Smoothly ease toward the scroll-driven target, plus a gentle idle spin.
      headphone.rotation.y += (targetY - headphone.rotation.y) * 0.06 + 0.0015;
      headphone.rotation.x += (targetX - headphone.rotation.x) * 0.06;
      headphone.position.y = Math.sin(t * 0.8) * 0.08;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      renderer.dispose();
    };
  }, []);

  // Re-apply the headphone color when the theme flips (CSS vars change).
  // rAF ensures the html class is already applied before we read the vars.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (!materialRef.current) return;
      const p = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim()
        .split(/\s+/)
        .map(Number);
      materialRef.current.color.setRGB(p[0] / 255, p[1] / 255, p[2] / 255);
    });
    return () => cancelAnimationFrame(id);
  }, [theme]);

  return (
    <canvas
      id="headphone-background"
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
