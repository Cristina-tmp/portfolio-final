"use client";
import Head from "next/head";
import BackgroundMotion from "@/components/BackgroundMotion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import DesignWork from "@/components/DesignWork";
import rick from "@/public/rick.gif";

export default function LandingPage() {
  return (
    <div className="h-screen snap-x snap-mandatory overflow-scroll scroll-smooth z-0">
      <Head>
        <title>Landing Page</title>
      </Head>

      <section
        id="hero"
        className=" relative min-h-screen bg-black flex flex-col space-y-8 items-center justify-center text-center"
      >
        <BackgroundMotion />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center snap-start">
          {/* <section id="hero" className="snap-center"> */}
          <Hero />
          {/* </section> */}
        </div>
      </section>

      <section id="about" className="snap-center">
        <div className="">
          <About />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* copywriting */}
      <section id="designWork" className="snap-start">
        <DesignWork />
      </section>

      {/* contact */}
      <section id="contact" className="snap-end">
        <Contact />
      </section>

      {/* home btn */}

      <Link href="#hero" className="sticky w-full bottom-5 cursor-pointer  ">
        <Image
          src={rick}
          width={100}
          alt="home icon"
          className="cursor-pointer rounded-full shadow-lg ml-4"
        />
      </Link>
    </div>
  );
}

// import { useEffect } from "react";
// import Head from "next/head";
// import * as THREE from "three";

// export default function Home() {
//   useEffect(() => {
//     // Create a container element to hold the canvas
//     const canvasContainer = document.getElementById("canvas-container");
//     // Create a canvas element and set its size to match the window
//     const canvas = document.createElement("canvas");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     // Append the canvas to the container
//     canvasContainer.appendChild(canvas);

//     // Create a WebGLRenderer to render the 3D scene
//     const renderer = new THREE.WebGLRenderer({ canvas });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Create a scene to hold all the 3D objects
//     const scene = new THREE.Scene();

//     // Create a camera to view the scene
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;

//     // Define the number of particles in the particle system
//     const particleCount = 500;
//     // Create a BufferGeometry to hold the particle data
//     const particles = new THREE.BufferGeometry();

//     // Create Float32Arrays to hold the positions and velocities of the particles
//     const positions = new Float32Array(particleCount * 3);
//     const velocities = new Float32Array(particleCount * 3);

//     // Generate random positions and velocities for each particle
//     for (let i = 0; i < particleCount; i++) {
//       const x = Math.random() * 10 - 5;
//       const y = Math.random() * 10 - 5;
//       const z = Math.random() * 10 - 5;

//       // Store the positions in the positions array
//       positions[i * 3] = x;
//       positions[i * 3 + 1] = y;
//       positions[i * 3 + 2] = z;

//       // Generate random x, y, z velocities
//       velocities[i * 3] = Math.random() * 0.02 - 0.01;
//       velocities[i * 3 + 1] = Math.random() * 0.02 - 0.01;
//       velocities[i * 3 + 2] = Math.random() * 0.02 - 0.01;
//     }

//     // Set the positions and velocities as attributes of the particle geometry

//     particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//     particles.setAttribute(
//       "velocity",
//       new THREE.BufferAttribute(velocities, 3)
//     );

//     const particleMaterial = new THREE.PointsMaterial({
//       color: 0xe74c3c,
//       size: 0.05,
//     });

//     const particleSystem = new THREE.Points(particles, particleMaterial);
//     scene.add(particleSystem);

//     function animate() {
//       requestAnimationFrame(animate);

//       const positions = particles.getAttribute("position");
//       const velocities = particles.getAttribute("velocity");

//       for (let i = 0; i < particleCount; i++) {
//         const x = positions.getX(i);
//         const y = positions.getY(i);
//         const z = positions.getZ(i);

//         positions.setX(i, x + velocities.getX(i));
//         positions.setY(i, y + velocities.getY(i));
//         positions.setZ(i, z + velocities.getZ(i));

//         if (x > 5 || x < -5 || y > 5 || y < -5 || z > 5 || z < -5) {
//           positions.setX(i, Math.random() * 10 - 5);
//           positions.setY(i, Math.random() * 10 - 5);
//           positions.setZ(i, Math.random() * 10 - 5);
//         }
//       }

//       positions.needsUpdate = true;

//       particleSystem.rotation.y += 0.001;

//       renderer.render(scene, camera);
//     }

//     animate();

//     return () => {
//       canvasContainer.removeChild(canvas);
//     };
//   }, []);

//   return (
//     <div>
//       <Head>
//         <title>Evil Morty Landing Page</title>
//       </Head>

//       <div className="relative min-h-screen bg-black">
//         <div
//           id="canvas-container"
//           className="absolute inset-0 z-0 pointer-events-none"
//         ></div>

//         <div className="flex flex-col items-center justify-center min-h-screen relative">
//           <h1 className="text-4xl font-bold text-white">
//             Welcome to the Evil Morty World
//           </h1>
//           <p className="text-lg text-white">
//             Experience the madness and chaos.
//           </p>
//           <a
//             href="#"
//             className="px-6 py-3 mt-8 text-lg font-bold text-white bg-red-600 rounded hover:bg-red-700 transition-colors"
//           >
//             Get Started
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import Home from "@/components/Home";

// export default function LandingPage() {
//   return (
//     <div className="h-screen snap-y snap-mandatory overflow-scroll z-0">
//       <Home />
//     </div>
//   );
// }
