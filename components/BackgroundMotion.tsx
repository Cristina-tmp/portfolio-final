import React from "react";
import { useEffect } from "react";
import * as THREE from "three";

const BackgroundMotion = () => {
  useEffect(() => {
    // Create a container element to hold the canvas
    const canvasContainer = document.getElementById("canvas-container");
    // Create a canvas element and set its size to match the window
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Append the canvas to the container
    canvasContainer!.appendChild(canvas);

    // Create a WebGLRenderer to render the 3D scene
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a scene to hold all the 3D objects
    const scene = new THREE.Scene();

    // Create a camera to view the scene
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Define the number of particles in the particle system
    const particleCount = 500;
    // Create a BufferGeometry to hold the particle data
    const particles = new THREE.BufferGeometry();

    // Create Float32Arrays to hold the positions and velocities of the particles
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    // Generate random positions and velocities for each particle
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 10 - 5;
      const z = Math.random() * 10 - 5;

      // Store the positions in the positions array
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Generate random x, y, z velocities
      velocities[i * 3] = Math.random() * 0.02 - 0.01;
      velocities[i * 3 + 1] = Math.random() * 0.02 - 0.01;
      velocities[i * 3 + 2] = Math.random() * 0.02 - 0.01;
    }

    // Set the positions and velocities as attributes of the particle geometry
    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute(
      "velocity",
      new THREE.BufferAttribute(velocities, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x902bf5,
      size: 0.05,
      map: new THREE.TextureLoader().load("/smoke.png"), // Replace 'smoke.png' with your smoke texture path
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 1,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    function animate() {
      requestAnimationFrame(animate);

      const positions = particles.getAttribute("position");
      const velocities = particles.getAttribute("velocity");

      for (let i = 0; i < particleCount; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);

        positions.setX(i, x + velocities.getX(i));
        positions.setY(i, y + velocities.getY(i));
        positions.setZ(i, z + velocities.getZ(i));

        if (x > 5 || x < -5 || y > 5 || y < -5 || z > 5 || z < -5) {
          positions.setX(i, Math.random() * 10 - 5);
          positions.setY(i, Math.random() * 10 - 5);
          positions.setZ(i, Math.random() * 10 - 5);
        }
      }

      positions.needsUpdate = true;

      particleSystem.rotation.y += 0.001;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      canvasContainer!.removeChild(canvas);
    };
  }, []);
  return (
    <div
      id="canvas-container"
      className="absolute inset-0 z-0 pointer-events-none"
    ></div>
  );
};

export default BackgroundMotion;
