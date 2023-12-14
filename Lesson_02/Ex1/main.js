import * as THREE from 'three';

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

// Creation of a cube
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube ); 

// Camera position
camera.position.z = 5;

// Add a function to ensure that the cube aspect ratio does not change when the window is resized

window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Render scene
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
