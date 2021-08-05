import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import classes from "../../styles/background.module.css";

class Background extends Component {
  componentDidMount() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.PlaneGeometry(22, 8, 70, 50);

    var material = new THREE.MeshBasicMaterial({
      color: "white",
      wireframe: true,
    });
    var wave = new THREE.Mesh(geometry, material);
    scene.add(wave);
    camera.position.z = 3;
    wave.rotation.set(-0.8, -0.3, 1);

    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime();
      let points = wave.geometry.attributes.position;
      const length = points.count * 3;

      for (let x = 0; x < length; x = x + 3) {
        const sinWaveZ1 = 0.5 * Math.sin(2 * points.array[x] + time);
        const sinWaveZ2 = 0.25 * Math.sin(3 * points.array[x] + time * 2);
        // const waveY = 0.5 * Math.sin(points.array[x + 1] + time);
        points.array[x + 2] = sinWaveZ1;
      }
      wave.geometry.attributes.position.needsUpdate = true;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return (
      <div className={classes.background} ref={(ref) => (this.mount = ref)} />
    );
  }
}
export default Background;
