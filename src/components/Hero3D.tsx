import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

type Hero3DProps = {
  onExplore?: () => void;
};

const storyStops = [
  {
    earthRotationY: THREE.MathUtils.degToRad(-118),
    cameraPos: new THREE.Vector3(0, 0.18, 5.35),
    target: new THREE.Vector3(0, 0, 0),
  },
  {
    earthRotationY: THREE.MathUtils.degToRad(-52),
    cameraPos: new THREE.Vector3(0.82, 0.32, 4.72),
    target: new THREE.Vector3(0, 0.03, 0),
  },
  {
    earthRotationY: THREE.MathUtils.degToRad(-22),
    cameraPos: new THREE.Vector3(0.36, 0.2, 3.86),
    target: new THREE.Vector3(0, 0.05, 0),
  },
];

const atmosphereVertex = `
  varying vec3 vNormal;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragment = `
  varying vec3 vNormal;

  void main() {
    float intensity = pow(0.72 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.2);
    vec3 glow = vec3(0.28, 0.85, 0.78) * intensity;
    gl_FragColor = vec4(glow, intensity * 0.9);
  }
`;

const Hero3D = ({ onExplore }: Hero3DProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasWrapRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const mountEl = canvasWrapRef.current;
    if (!sectionEl || !mountEl) {
      return undefined;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x02060a, 18, 80);

    const camera = new THREE.PerspectiveCamera(46, mountEl.clientWidth / mountEl.clientHeight, 0.1, 180);
    camera.position.copy(storyStops[0].cameraPos);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mountEl.clientWidth, mountEl.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountEl.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xa7f3d0, 0.55);
    const hemisphere = new THREE.HemisphereLight(0x9ef0ff, 0x03110d, 0.6);
    const sun = new THREE.DirectionalLight(0xffffff, 1.25);
    sun.position.set(4.2, 2.9, 4.8);
    scene.add(ambient, hemisphere, sun);

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 2200;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i += 1) {
      const radius = 35 + Math.random() * 52;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.cos(phi);
      starPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xdbeafe,
      size: 0.07,
      transparent: true,
      opacity: 0.95,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const loader = new THREE.TextureLoader();
    const dayTexture = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg');
    const normalTexture = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg');
    const specularTexture = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg');
    const cloudTexture = loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png');

    dayTexture.colorSpace = THREE.SRGBColorSpace;
    cloudTexture.colorSpace = THREE.SRGBColorSpace;

    const earthPivot = new THREE.Group();
    earthPivot.rotation.y = storyStops[0].earthRotationY;
    scene.add(earthPivot);

    const earthRadius = 2.45;

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(earthRadius, 160, 160),
      new THREE.MeshPhongMaterial({
        map: dayTexture,
        normalMap: normalTexture,
        normalScale: new THREE.Vector2(1, 1),
        specularMap: specularTexture,
        specular: new THREE.Color(0x1f3550),
        shininess: 22,
      }),
    );

    const clouds = new THREE.Mesh(
      new THREE.SphereGeometry(earthRadius + 0.06, 160, 160),
      new THREE.MeshPhongMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.52,
        depthWrite: false,
      }),
    );

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(earthRadius + 0.16, 160, 160),
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertex,
        fragmentShader: atmosphereFragment,
        side: THREE.BackSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );

    earthPivot.add(earth, clouds, atmosphere);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.minDistance = 3.35;
    controls.maxDistance = 7.6;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.45;

    const onControlStart = (): void => {
      isDraggingRef.current = true;
    };

    const onControlEnd = (): void => {
      isDraggingRef.current = false;
    };

    controls.addEventListener('start', onControlStart);
    controls.addEventListener('end', onControlEnd);

    let frameId = 0;
    let spinAccumulator = 0;

    const animate = (): void => {
      frameId = requestAnimationFrame(animate);

      const rect = sectionEl.getBoundingClientRect();
      const maxScroll = Math.max(1, rect.height - window.innerHeight);
      const scrollProgress = THREE.MathUtils.clamp(-rect.top / maxScroll, 0, 1);

      const segmentCount = storyStops.length - 1;
      const scaled = scrollProgress * segmentCount;
      const from = Math.floor(scaled);
      const to = Math.min(from + 1, segmentCount);
      const t = scaled - from;

      const stopA = storyStops[from];
      const stopB = storyStops[to];

      const targetCameraPos = stopA.cameraPos.clone().lerp(stopB.cameraPos, t);
      const targetLookAt = stopA.target.clone().lerp(stopB.target, t);
      const targetEarthRotation = THREE.MathUtils.lerp(stopA.earthRotationY, stopB.earthRotationY, t);

      camera.position.lerp(targetCameraPos, 0.06);
      controls.target.lerp(targetLookAt, 0.06);

      const baseSpin = isDraggingRef.current ? 0.00065 : 0.00195;
      spinAccumulator += baseSpin;

      // Keep cinematic scene alignment on pivot while spinning Earth layers continuously.
      earthPivot.rotation.y = THREE.MathUtils.lerp(earthPivot.rotation.y, targetEarthRotation, 0.06);
      earth.rotation.y = spinAccumulator;
      clouds.rotation.y = spinAccumulator * 1.18;
      stars.rotation.y += 0.00006;

      controls.update();
      renderer.render(scene, camera);
    };

    const onResize = (): void => {
      if (!canvasWrapRef.current) {
        return;
      }

      const { clientWidth, clientHeight } = canvasWrapRef.current;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    animate();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      controls.removeEventListener('start', onControlStart);
      controls.removeEventListener('end', onControlEnd);
      controls.dispose();

      dayTexture.dispose();
      normalTexture.dispose();
      specularTexture.dispose();
      cloudTexture.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();

      renderer.dispose();
      scene.clear();
      mountEl.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_18%,rgba(16,185,129,0.16),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(30,64,175,0.14),transparent_42%),linear-gradient(180deg,#02060a,#02070d)]" />

      <div className="flex min-h-[calc(100svh-4rem)] items-center py-6 md:py-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-6 md:grid-cols-[0.86fr_1.14fr] md:px-10">
          <div>
            <h1 className="max-w-xl font-heading text-[clamp(2rem,4vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.01em] text-white md:tracking-[-0.02em]">
              Welcome to
              <span className="mt-1 block font-semibold text-emerald-100 md:mt-2">Montana AI Ecosystem</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 md:text-base">
              Artificial Intelligence for Environmental Sustainability.
            </p>

            <button
              type="button"
              onClick={() => onExplore?.()}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-emerald-300/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200 transition hover:bg-emerald-300/20"
            >
              Explore
              <span aria-hidden="true">↓</span>
            </button>

          </div>

          <div className="relative mx-auto w-full max-w-[760px]">
            <div className="relative aspect-square overflow-hidden rounded-full">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-full bg-[radial-gradient(circle_at_30%_24%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_70%_72%,rgba(2,6,23,0.35),transparent_58%)]" />
              <div ref={canvasWrapRef} className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
