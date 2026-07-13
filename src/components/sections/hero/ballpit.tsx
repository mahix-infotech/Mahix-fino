/* eslint-disable react/no-unknown-property */
"use client"

import React, { useEffect, useRef } from 'react';
import {
  Vector3 as a,
  MeshPhysicalMaterial as c,
  InstancedMesh as d,
  Timer as ThreeTimer,
  AmbientLight as f,
  SphereGeometry as g,
  ShaderChunk as h,
  Scene as i,
  Color as l,
  Object3D as m,
  SRGBColorSpace as n,
  MathUtils as o,
  PMREMGenerator as p,
  Vector2 as r,
  WebGLRenderer as s,
  PerspectiveCamera as t,
  PointLight as u,
  ACESFilmicToneMapping as v,
  Plane as w,
  Raycaster as y
} from 'three';
import { RoomEnvironment as z } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Bulletproof fallback for Timer class across Three.js versions
class CustomTimer {
  #prevTime = 0;
  #currentTime = 0;
  #delta = 0;
  #elapsed = 0;
  constructor() {
    this.reset();
  }
  reset() {
    this.#prevTime = performance.now();
    this.#currentTime = this.#prevTime;
    this.#delta = 0;
    this.#elapsed = 0;
  }
  update() {
    this.#currentTime = performance.now();
    this.#delta = (this.#currentTime - this.#prevTime) / 1000;
    this.#elapsed += this.#delta;
    this.#prevTime = this.#currentTime;
  }
  getDelta() {
    return this.#delta;
  }
  getElapsed() {
    return this.#elapsed;
  }
  dispose() {}
}

const e = ThreeTimer || CustomTimer;

class x {
  #e: any;
  canvas!: HTMLCanvasElement;
  camera!: t;
  cameraMinAspect?: number;
  cameraMaxAspect?: number;
  cameraFov?: number;
  maxPixelRatio?: number;
  minPixelRatio?: number;
  scene!: i;
  renderer!: s;
  #t: any = null;
  size = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  render = this.#i;
  onBeforeRender = (h: any) => {};
  onAfterRender = (h: any) => {};
  onAfterResize = (size: any) => {};
  #s = false;
  #n = false;
  isDisposed = false;
  #o?: IntersectionObserver;
  #r?: ResizeObserver;
  #a?: any;
  #c = new e();
  #h = { elapsed: 0, delta: 0 };
  #l: number = 0;
  #frameInterval = 0;
  #lastFrame = 0;

  constructor(opt: any) {
    this.#e = { ...opt };
    this.maxPixelRatio = opt.maxPixelRatio ?? 1;
    this.minPixelRatio = opt.minPixelRatio;
    this.#frameInterval = opt.fps ? 1000 / opt.fps : 0;
    this.#m();
    this.#d();
    this.#p();
    this.resize();
    this.#g();
  }
  #m() {
    this.camera = new t();
    this.cameraFov = this.camera.fov;
  }
  #d() {
    this.scene = new i();
  }
  #p() {
    if (this.#e.canvas) {
      this.canvas = this.#e.canvas;
    } else if (this.#e.id) {
      this.canvas = document.getElementById(this.#e.id) as HTMLCanvasElement;
    } else {
      console.error('Three: Missing canvas or id parameter');
    }
    this.canvas.style.display = 'block';
    const eOpts = {
      canvas: this.canvas,
      powerPreference: 'high-performance',
      ...(this.#e.rendererOptions ?? {})
    };
    this.renderer = new s(eOpts);
    this.renderer.outputColorSpace = n;
  }
  #g() {
    if (!(this.#e.size instanceof Object)) {
      window.addEventListener('resize', this.#f.bind(this));
      if (this.#e.size === 'parent' && this.canvas.parentNode) {
        this.#r = new ResizeObserver(this.#f.bind(this));
        this.#r.observe(this.canvas.parentNode as Element);
      }
    }
    this.#o = new IntersectionObserver(this.#u.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0
    });
    this.#o.observe(this.canvas);
    document.addEventListener('visibilitychange', this.#v.bind(this));
  }
  #y() {
    window.removeEventListener('resize', this.#f.bind(this));
    this.#r?.disconnect();
    this.#o?.disconnect();
    document.removeEventListener('visibilitychange', this.#v.bind(this));
  }
  #u(eList: IntersectionObserverEntry[]) {
    this.#s = eList[0].isIntersecting;
    this.#s ? this.#w() : this.#z();
  }
  #v() {
    if (this.#s) {
      document.hidden ? this.#z() : this.#w();
    }
  }
  #f() {
    if (this.#a) clearTimeout(this.#a);
    this.#a = setTimeout(this.resize.bind(this), 100);
  }
  resize() {
    let wVal, hVal;
    if (this.#e.size instanceof Object) {
      wVal = this.#e.size.width;
      hVal = this.#e.size.height;
    } else if (this.#e.size === 'parent' && this.canvas.parentNode) {
      wVal = (this.canvas.parentNode as HTMLElement).offsetWidth;
      hVal = (this.canvas.parentNode as HTMLElement).offsetHeight;
    } else {
      wVal = window.innerWidth;
      hVal = window.innerHeight;
    }
    this.size.width = wVal;
    this.size.height = hVal;
    this.size.ratio = wVal / hVal;
    this.#x();
    this.#b();
    this.onAfterResize(this.size);
  }
  #x() {
    this.camera.aspect = this.size.width / this.size.height;
    if (this.camera.isPerspectiveCamera && this.cameraFov) {
      if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
        this.#A(this.cameraMinAspect);
      } else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
        this.#A(this.cameraMaxAspect);
      } else {
        this.camera.fov = this.cameraFov;
      }
    }
    this.camera.updateProjectionMatrix();
    this.updateWorldSize();
  }
  #A(aspectVal: number) {
    const tangent = Math.tan(o.degToRad(this.cameraFov! / 2)) / (this.camera.aspect / aspectVal);
    this.camera.fov = 2 * o.radToDeg(Math.atan(tangent));
  }
  updateWorldSize() {
    if (this.camera.isPerspectiveCamera) {
      const fovRad = (this.camera.fov * Math.PI) / 180;
      this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    }
  }
  #b() {
    this.renderer.setSize(this.size.width, this.size.height);
    this.#t?.setSize(this.size.width, this.size.height);
    let pxRatio = window.devicePixelRatio;
    if (this.maxPixelRatio && pxRatio > this.maxPixelRatio) {
      pxRatio = this.maxPixelRatio;
    } else if (this.minPixelRatio && pxRatio < this.minPixelRatio) {
      pxRatio = this.minPixelRatio;
    }
    this.renderer.setPixelRatio(pxRatio);
    this.size.pixelRatio = pxRatio;
  }
  get postprocessing() {
    return this.#t;
  }
  set postprocessing(val) {
    this.#t = val;
    this.render = val.render.bind(val);
  }
  #w() {
    if (this.#n) return;
    const animate = () => {
      this.#l = requestAnimationFrame(animate);
      const now = performance.now();
      if (this.#frameInterval && now - this.#lastFrame < this.#frameInterval) return;
      this.#lastFrame = now;
      this.#c.update();
      this.#h.delta = this.#c.getDelta();
      this.#h.elapsed += this.#h.delta;
      this.onBeforeRender(this.#h);
      this.render();
      this.onAfterRender(this.#h);
    };
    this.#n = true;
    this.#c.reset();
    animate();
  }
  #z() {
    if (this.#n) {
      cancelAnimationFrame(this.#l);
      this.#n = false;
    }
  }
  #i() {
    this.renderer.render(this.scene, this.camera);
  }
  clear() {
    this.scene.traverse(node => {
      if ((node as any).isMesh && typeof (node as any).material === 'object' && (node as any).material !== null) {
        Object.keys((node as any).material).forEach(key => {
          const materialProp = (node as any).material[key];
          if (materialProp !== null && typeof materialProp === 'object' && typeof materialProp.dispose === 'function') {
            materialProp.dispose();
          }
        });
        (node as any).material.dispose();
        (node as any).geometry.dispose();
      }
    });
    this.scene.clear();
  }
  dispose() {
    this.#y();
    this.#z();
    this.#c.dispose();
    this.clear();
    this.#t?.dispose();
    this.renderer.dispose();
    this.isDisposed = true;
  }
}

const b = new Map(),
  A = new r();
let R = false;
function S(elemConfig: any) {
  const tConf = {
    position: new r(),
    nPosition: new r(),
    hover: false,
    touching: false,
    onEnter() {},
    onMove() {},
    onClick() {},
    onLeave() {},
    ...elemConfig
  };
  (function (domElem, tObj) {
    if (!b.has(domElem)) {
      b.set(domElem, tObj);
      if (!R) {
        document.body.addEventListener('pointermove', M);
        document.body.addEventListener('pointerleave', L);
        document.body.addEventListener('click', C);

        document.body.addEventListener('touchstart', TouchStart, { passive: false });
        document.body.addEventListener('touchmove', TouchMove, { passive: false });
        document.body.addEventListener('touchend', TouchEnd, { passive: false });
        document.body.addEventListener('touchcancel', TouchEnd, { passive: false });

        R = true;
      }
    }
  })(elemConfig.domElement, tConf);
  tConf.dispose = () => {
    const domElem = elemConfig.domElement;
    b.delete(domElem);
    if (b.size === 0) {
      document.body.removeEventListener('pointermove', M);
      document.body.removeEventListener('pointerleave', L);
      document.body.removeEventListener('click', C);

      document.body.removeEventListener('touchstart', TouchStart);
      document.body.removeEventListener('touchmove', TouchMove);
      document.body.removeEventListener('touchend', TouchEnd);
      document.body.removeEventListener('touchcancel', TouchEnd);

      R = false;
    }
  };
  return tConf;
}

function M(evt: PointerEvent) {
  A.x = evt.clientX;
  A.y = evt.clientY;
  processInteraction();
}

function processInteraction() {
  for (const [elem, tVal] of b) {
    const rect = elem.getBoundingClientRect();
    if (D(rect)) {
      P(tVal, rect);
      if (!tVal.hover) {
        tVal.hover = true;
        tVal.onEnter(tVal);
      }
      tVal.onMove(tVal);
    } else if (tVal.hover && !tVal.touching) {
      tVal.hover = false;
      tVal.onLeave(tVal);
    }
  }
}

function C(evt: MouseEvent) {
  A.x = evt.clientX;
  A.y = evt.clientY;
  for (const [elem, tVal] of b) {
    const rect = elem.getBoundingClientRect();
    P(tVal, rect);
    if (D(rect)) tVal.onClick(tVal);
  }
}

function L() {
  for (const tVal of b.values()) {
    if (tVal.hover) {
      tVal.hover = false;
      tVal.onLeave(tVal);
    }
  }
}

function TouchStart(evt: TouchEvent) {
  if (evt.touches.length > 0) {
    A.x = evt.touches[0].clientX;
    A.y = evt.touches[0].clientY;

    for (const [elem, tVal] of b) {
      const rect = elem.getBoundingClientRect();
      if (D(rect)) {
        evt.preventDefault();
        tVal.touching = true;
        P(tVal, rect);
        if (!tVal.hover) {
          tVal.hover = true;
          tVal.onEnter(tVal);
        }
        tVal.onMove(tVal);
      }
    }
  }
}

function TouchMove(evt: TouchEvent) {
  if (evt.touches.length > 0) {
    A.x = evt.touches[0].clientX;
    A.y = evt.touches[0].clientY;

    for (const [elem, tVal] of b) {
      const rect = elem.getBoundingClientRect();
      P(tVal, rect);

      if (D(rect)) {
        evt.preventDefault();
        if (!tVal.hover) {
          tVal.hover = true;
          tVal.touching = true;
          tVal.onEnter(tVal);
        }
        tVal.onMove(tVal);
      } else if (tVal.hover && tVal.touching) {
        tVal.onMove(tVal);
      }
    }
  }
}

function TouchEnd() {
  for (const [, tVal] of b) {
    if (tVal.touching) {
      tVal.touching = false;
      if (tVal.hover) {
        tVal.hover = false;
        tVal.onLeave(tVal);
      }
    }
  }
}

function P(tVal: any, rect: DOMRect) {
  const { position: i, nPosition: s } = tVal;
  i.x = A.x - rect.left;
  i.y = A.y - rect.top;
  s.x = (i.x / rect.width) * 2 - 1;
  s.y = (-i.y / rect.height) * 2 + 1;
}
function D(rect: DOMRect) {
  const { x: tVal, y: i } = A;
  const { left: s, top: n, width: o, height: r } = rect;
  return tVal >= s && tVal <= s + o && i >= n && i <= n + r;
}

const { randFloat: k, randFloatSpread: E } = o;
const F = new a();
const I = new a();
const O = new a();
const V = new a();
const B = new a();
const N = new a();
const _ = new a();
const j = new a();
const H = new a();
const T = new a();

class W {
  config: any;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  center = new a();

  constructor(cfg: any) {
    this.config = cfg;
    this.positionData = new Float32Array(3 * cfg.count).fill(0);
    this.velocityData = new Float32Array(3 * cfg.count).fill(0);
    this.sizeData = new Float32Array(cfg.count).fill(1);
    this.#R();
    this.setSizes();
  }
  #R() {
    const { config: cfg, positionData: tVal } = this;
    this.center.toArray(tVal, 0);
    for (let idx = 1; idx < cfg.count; idx++) {
      const s = 3 * idx;
      tVal[s] = E(2 * cfg.maxX);
      tVal[s + 1] = E(2 * cfg.maxY);
      tVal[s + 2] = E(2 * cfg.maxZ);
    }
  }
  setSizes() {
    const { config: cfg, sizeData: tVal } = this;
    tVal[0] = cfg.size0;
    for (let idx = 1; idx < cfg.count; idx++) {
      tVal[idx] = k(cfg.minSize, cfg.maxSize);
    }
  }
  update(eVal: any) {
    const { config: tVal, center: i, positionData: s, sizeData: n, velocityData: o } = this;
    let r = 0;
    if (tVal.controlSphere0) {
      r = 1;
      F.fromArray(s, 0);
      F.lerp(i, 0.1).toArray(s, 0);
      V.set(0, 0, 0).toArray(o, 0);
    }
    for (let idx = r; idx < tVal.count; idx++) {
      const base = 3 * idx;
      I.fromArray(s, base);
      B.fromArray(o, base);
      B.y -= eVal.delta * tVal.gravity * n[idx];
      B.multiplyScalar(tVal.friction);
      B.clampLength(0, tVal.maxVelocity);
      I.add(B);
      I.toArray(s, base);
      B.toArray(o, base);
    }
    for (let idx = r; idx < tVal.count; idx++) {
      const base = 3 * idx;
      I.fromArray(s, base);
      B.fromArray(o, base);
      const radius = n[idx];
      for (let jdx = idx + 1; jdx < tVal.count; jdx++) {
        const otherBase = 3 * jdx;
        O.fromArray(s, otherBase);
        N.fromArray(o, otherBase);
        const otherRadius = n[jdx];
        _.copy(O).sub(I);
        const distSq = _.lengthSq();
        const sumRadius = radius + otherRadius;
        if (distSq < sumRadius * sumRadius) {
          const dist = Math.sqrt(distSq) || 0.0001;
          const overlap = sumRadius - dist;
          j.copy(_)
            .normalize()
            .multiplyScalar(0.5 * overlap);
          H.copy(j).multiplyScalar(Math.max(B.length(), 1));
          T.copy(j).multiplyScalar(Math.max(N.length(), 1));
          I.sub(j);
          B.sub(H);
          I.toArray(s, base);
          B.toArray(o, base);
          O.add(j);
          N.add(T);
          O.toArray(s, otherBase);
          N.toArray(o, otherBase);
        }
      }
      if (tVal.controlSphere0) {
        _.copy(F).sub(I);
        const distSq = _.lengthSq();
        const sumRadius0 = radius + n[0];
        if (distSq < sumRadius0 * sumRadius0) {
          const dist = Math.sqrt(distSq) || 0.0001;
          const diff = sumRadius0 - dist;
          j.copy(_.normalize()).multiplyScalar(diff);
          H.copy(j).multiplyScalar(Math.max(B.length(), 2));
          I.sub(j);
          B.sub(H);
        }
      }
      if (Math.abs(I.x) + radius > tVal.maxX) {
        I.x = Math.sign(I.x) * (tVal.maxX - radius);
        B.x = -B.x * tVal.wallBounce;
      }
      if (tVal.gravity === 0) {
        if (Math.abs(I.y) + radius > tVal.maxY) {
          I.y = Math.sign(I.y) * (tVal.maxY - radius);
          B.y = -B.y * tVal.wallBounce;
        }
      } else if (I.y - radius < -tVal.maxY) {
        I.y = -tVal.maxY + radius;
        B.y = -B.y * tVal.wallBounce;
      }
      const maxBoundary = Math.max(tVal.maxZ, tVal.maxSize);
      if (Math.abs(I.z) + radius > maxBoundary) {
        I.z = Math.sign(I.z) * (tVal.maxZ - radius);
        B.z = -B.z * tVal.wallBounce;
      }
      I.toArray(s, base);
      B.toArray(o, base);
    }
  }
}

const X = {
  count: 200,
  colors: [0, 0, 0],
  ambientColor: 16777215,
  ambientIntensity: 1,
  lightIntensity: 200,
  materialParams: {
    metalness: 0.5,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.15
  },
  minSize: 0.5,
  maxSize: 1,
  size0: 1,
  gravity: 0.5,
  friction: 0.9975,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true
};

const U = new m();

class Z extends d {
  config: any;
  physics: W;
  ambientLight!: f;
  light!: u;

  constructor(eVal: any, tVal: any = {}) {
    const i = { ...X, ...tVal };
    const s = new z();
    const nTex = new p(eVal).fromScene(s).texture;
    const o = new g();
    const r = new c({ envMap: nTex, ...i.materialParams });
    r.envMapRotation.x = -Math.PI / 2;
    super(o, r, i.count);
    this.config = i;
    this.physics = new W(i);
    this.#S();
    this.setColors(i.colors);
  }
  #S() {
    this.ambientLight = new f(this.config.ambientColor, this.config.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new u(this.config.colors[0], this.config.lightIntensity);
    this.add(this.light);
  }
  setColors(eVal: any) {
    if (Array.isArray(eVal) && eVal.length > 1) {
      const tVal = (function (eArr) {
        let tArr: any[], iArr: any[];
        function setColors(eList: any[]) {
          tArr = eList;
          iArr = [];
          tArr.forEach(col => {
            iArr.push(new l(col));
          });
        }
        setColors(eArr);
        return {
          setColors,
          getColorAt: function (ratio: number, out = new l()) {
            const scaled = Math.max(0, Math.min(1, ratio)) * (tArr.length - 1);
            const idx = Math.floor(scaled);
            const start = iArr[idx];
            if (idx >= tArr.length - 1) return start.clone();
            const alpha = scaled - idx;
            const end = iArr[idx + 1];
            out.r = start.r + alpha * (end.r - start.r);
            out.g = start.g + alpha * (end.g - start.g);
            out.b = start.b + alpha * (end.b - start.b);
            return out;
          }
        };
      })(eVal);
      for (let idx = 0; idx < this.count; idx++) {
        this.setColorAt(idx, tVal.getColorAt(idx / this.count));
        if (idx === 0) {
          this.light.color.copy(tVal.getColorAt(idx / this.count));
        }
      }
      this.instanceColor!.needsUpdate = true;
    }
  }
  update(eVal: any) {
    this.physics.update(eVal);
    for (let idx = 0; idx < this.count; idx++) {
      U.position.fromArray(this.physics.positionData, 3 * idx);
      if (idx === 0 && this.config.followCursor === false) {
        U.scale.setScalar(0);
      } else {
        U.scale.setScalar(this.physics.sizeData[idx]);
      }
      U.updateMatrix();
      this.setMatrixAt(idx, U.matrix);
      if (idx === 0) this.light.position.copy(U.position);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

function createBallpit(eVal: HTMLCanvasElement, tVal: any = {}) {
  const i = new x({
    canvas: eVal,
    size: 'parent',
    maxPixelRatio: tVal.maxPixelRatio ?? 1,
    fps: tVal.fps ?? 30,
    rendererOptions: { antialias: false, alpha: true, powerPreference: 'low-power' }
  });
  let sObj: Z;
  i.renderer.toneMapping = v;
  i.camera.position.set(0, 0, 20);
  i.camera.lookAt(0, 0, 0);
  i.cameraMaxAspect = 1.5;
  i.resize();
  initialize(tVal);
  const n = new y();
  const o = new w(new a(0, 0, 1), 0);
  const r = new a();
  let cVal = false;

  eVal.style.touchAction = 'none';
  eVal.style.userSelect = 'none';
  (eVal.style as any).webkitUserSelect = 'none';

  const hVal: any = tVal.followCursor === false ? { dispose() {} } : S({
    domElement: eVal,
    onMove() {
      n.setFromCamera(hVal.nPosition, i.camera);
      i.camera.getWorldDirection(o.normal);
      n.ray.intersectPlane(o, r);
      sObj.config.controlSphere0 = false;

      const { positionData, velocityData, sizeData } = sObj.physics;
      const influence = tVal.cursorInfluence ?? 0.06;
      const radius = tVal.cursorRadius ?? 9;
      const radiusSq = radius * radius;

      for (let idx = 1; idx < sObj.count; idx++) {
        const base = idx * 3;
        const dx = positionData[base] - r.x;
        const dy = positionData[base + 1] - r.y;
        const dz = positionData[base + 2] - r.z;
        const distSq = Math.max(dx * dx + dy * dy + dz * dz, 0.001);
        const falloff = Math.max(0, 1 - distSq / radiusSq);
        const force = influence * falloff * (sizeData[idx] ?? 1);

        if (force > 0) {
          const invDist = 1 / Math.sqrt(distSq);
          velocityData[base] += dx * invDist * force;
          velocityData[base + 1] += dy * invDist * force;
          velocityData[base + 2] += dz * invDist * force * 0.35;
        }
      }
    },
    onLeave() {
      sObj.config.controlSphere0 = false;
    }
  });
  function initialize(opts: any) {
    if (sObj) {
      i.clear();
      i.scene.remove(sObj);
    }
    sObj = new Z(i.renderer, opts);
    i.scene.add(sObj);
  }
  i.onBeforeRender = eUpdate => {
    if (!cVal) sObj.update(eUpdate);
  };
  i.onAfterResize = size => {
    sObj.config.maxX = size.wWidth / 2;
    sObj.config.maxY = size.wHeight / 2;
  };
  return {
    three: i,
    get spheres() {
      return sObj;
    },
    setCount(num: number) {
      initialize({ ...sObj.config, count: num });
    },
    togglePause() {
      cVal = !cVal;
    },
    dispose() {
      hVal.dispose();
      i.dispose();
    }
  };
}

interface BallpitProps {
  className?: string;
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  followCursor?: boolean;
  colors?: number[];
  minSize?: number;
  maxSize?: number;
  maxPixelRatio?: number;
  fps?: number;
  cursorInfluence?: number;
  cursorRadius?: number;
}

export function Ballpit({ className = '', followCursor = true, ...props }: BallpitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spheresInstanceRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    spheresInstanceRef.current = createBallpit(canvas, { followCursor, ...props });

    return () => {
      if (spheresInstanceRef.current) {
        spheresInstanceRef.current.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas className={className} ref={canvasRef} style={{ width: '100%', height: '100%', pointerEvents: followCursor ? 'auto' : 'none' }} />;
}

export default Ballpit;



