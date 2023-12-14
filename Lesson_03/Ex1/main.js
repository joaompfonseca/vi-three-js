import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

// Camera
//const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var aspectRatio = window.innerWidth / window.innerHeight;
var top = 3 / aspectRatio;
var bottom = -3 / aspectRatio;
var camera = new THREE.OrthographicCamera( -3, 3, top, bottom, 1, 1000 );

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creation of a plane
const geometry = new THREE.PlaneGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0xffffff} ); 

var texloader = new THREE.TextureLoader();
var tex = texloader.load("../lena.jpg");

// add texture to material
material.map = tex;

const plane = new THREE.Mesh( geometry, material );
scene.add( plane );

// Camera position
camera.position.z = 5;

// Add OrbitControls so that we can pan around with the mouse
const controls = new OrbitControls(camera, renderer.domElement);

// Add a function to ensure that the cube aspect ratio does not change when the window is resized

window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Render scene
function render() {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
}
render();
