import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      58,
      mountNode.clientWidth / mountNode.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.25, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountNode.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1400;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      const radius = 8 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.45;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: '#7ba3ff',
      size: 0.052,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    rootGroup.add(particles);

    const floatingMeshes = [];
    const meshMaterial = new THREE.MeshPhysicalMaterial({
      color: '#79a0ff',
      roughness: 0.15,
      metalness: 0.65,
      transmission: 0.06,
      emissive: '#4b6fff',
      emissiveIntensity: 0.44,
      transparent: true,
      opacity: 0.62
    });

    for (let i = 0; i < 10; i += 1) {
      const geometry = new THREE.IcosahedronGeometry(0.16 + Math.random() * 0.24, 0);
      const mesh = new THREE.Mesh(geometry, meshMaterial.clone());
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      );
      mesh.userData = {
        drift: 0.25 + Math.random() * 0.45,
        spinX: (Math.random() - 0.5) * 0.01,
        spinY: (Math.random() - 0.5) * 0.012
      };
      floatingMeshes.push(mesh);
      rootGroup.add(mesh);
    }

    const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
    const pointLightA = new THREE.PointLight('#6ca0ff', 1.7, 45, 1.8);
    pointLightA.position.set(-3.8, 3.2, 6.2);

    const pointLightB = new THREE.PointLight('#8f67ff', 1.35, 40, 2.2);
    pointLightB.position.set(3.6, -2.6, 4);

    scene.add(ambientLight, pointLightA, pointLightB);

    const mouse = new THREE.Vector2(0, 0);
    const targetCamera = new THREE.Vector3(0, 0.25, 8);

    const handleMouseMove = (event) => {
      const nx = event.clientX / window.innerWidth;
      const ny = event.clientY / window.innerHeight;
      mouse.x = nx * 2 - 1;
      mouse.y = -(ny * 2 - 1);
    };

    const handleResize = () => {
      if (!mountNode) {
        return;
      }
      const { clientWidth, clientHeight } = mountNode;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let frame;

    const animate = () => {
      frame = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      rootGroup.rotation.y = elapsed * 0.07;
      particles.rotation.x = elapsed * 0.022;
      particles.rotation.z = elapsed * 0.016;

      floatingMeshes.forEach((mesh, index) => {
        mesh.rotation.x += mesh.userData.spinX;
        mesh.rotation.y += mesh.userData.spinY;
        mesh.position.y += Math.sin(elapsed * mesh.userData.drift + index) * 0.0025;
      });

      targetCamera.x = mouse.x * 0.5;
      targetCamera.y = 0.15 + mouse.y * 0.35;
      camera.position.lerp(targetCamera, 0.06);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      particlesGeometry.dispose();
      particlesMaterial.dispose();

      floatingMeshes.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });

      if (renderer.domElement && mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-20" aria-hidden="true" />;
}
