import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

//AxisHelper
//const axesHelper = new THREE.AxesHelper( 3 );
//scene.add( axesHelper );

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Create a DirectionalLight (https://threejs.org/docs/#api/en/lights/DirectionalLight) at position 0.5.0 with color 0xffffff and intensity 1.0.
const light = new THREE.DirectionalLight(0xffffff, 1.0);
light.position.set(0, 5, 0);
scene.add(light);

//AmbientLight
const alight = new THREE.AmbientLight(0xffffff);
scene.add(alight);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creation of a cube
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshPhongMaterial({
    color: '#006063',
specular: '#a9fcff',
shininess: 100
});
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube ); 

// Camera position
camera.position.z = 5;

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// Render scene
function render() {
    requestAnimationFrame(render);
    controls.update();
    // Scene Animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
render();


