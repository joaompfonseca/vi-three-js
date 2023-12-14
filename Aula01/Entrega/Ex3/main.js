import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creation of a triangle 1

var geometry1 = new THREE.BufferGeometry();
const vertices1 = new Float32Array( [
    -0.2, 0.15, 0.0,
    0.35, 0.65, 0.0,
    -0.85, 0.9,  0.0,
] );
geometry1.setAttribute( 'position', new THREE.BufferAttribute( vertices1, 3 ) );

var colors = new Uint8Array( [
    255,  0,  0,  
    0,  255,  0,  
    0,  0,  255,  
] );

geometry1.setAttribute( 'color', new THREE.BufferAttribute( colors, 3, true) );

const material = new THREE.MeshBasicMaterial( { vertexColors: true } );

const mesh = new THREE.Mesh( geometry1, material );

scene.add( mesh );

// Creation of a triangle 2

var geometry2 = new THREE.BufferGeometry();
const vertices2 = new Float32Array( [
    0.0,  0.0,  0.0,
    0.5,  0.75, 0.0,
    1.0,  0.0,  0.0,
] );

geometry2.setAttribute( 'position', new THREE.BufferAttribute( vertices2, 3 ) );

const material2 = new THREE.MeshBasicMaterial( { color: 0x800080 } );

material2.side = THREE.DoubleSide;

const mesh2 = new THREE.Mesh( geometry2, material2 );

scene.add( mesh2 );

// Creation of a triangle 3

var geometry3 = new THREE.BufferGeometry();

const vertices3 = new Float32Array( [
    0.0,  0.0,  0.0,
    -0.35,-1.0,  0.0,
    -0.7,  0.25, 0.0,
] );

geometry3.setAttribute( 'position', new THREE.BufferAttribute( vertices3, 3 ) );

const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );

material3.side = THREE.DoubleSide;

const mesh3 = new THREE.Mesh( geometry3, material3 );

scene.add( mesh3 );

// Creation of a triangle 4

var geometry4 = new THREE.BufferGeometry();

const vertices4 = new Float32Array( [
    0.15,-0.95, 0.0,
    0.90,-0.7,  0.0,
    0.65, 0.10, 0.0,
] );

geometry4.setAttribute( 'position', new THREE.BufferAttribute( vertices4, 3 ) );

const material4 = new THREE.MeshBasicMaterial( { color: 0xffffff } );

material4.wireframe = true;

const mesh4 = new THREE.Mesh( geometry4, material4 );

scene.add( mesh4 );

// Camera position
camera.position.z = 2;

// Render scene
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
