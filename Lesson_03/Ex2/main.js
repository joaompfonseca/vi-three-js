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
const geometry = new THREE.BoxGeometry(1,1,1);

var texloader = new THREE.TextureLoader();
var tex1 = texloader.load("../Im1.jpg");
var tex2 = texloader.load("../Im2.jpg");
var tex3 = texloader.load("../Im3.jpg");
var tex4 = texloader.load("../Im4.jpg");
var tex5 = texloader.load("../Im5.jpg");
var tex6 = texloader.load("../Im6.jpg");

const materials = [];
materials.push(new THREE.MeshBasicMaterial({map: tex1}));
materials.push(new THREE.MeshBasicMaterial({map: tex2}));
materials.push(new THREE.MeshBasicMaterial({map: tex3}));
materials.push(new THREE.MeshBasicMaterial({map: tex4}));
materials.push(new THREE.MeshBasicMaterial({map: tex5}));
materials.push(new THREE.MeshBasicMaterial({map: tex6}));

const cube = new THREE.Mesh( geometry, materials );
scene.add( cube );

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
