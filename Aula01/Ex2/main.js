import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creation of a triangle
var geometry = new THREE.BufferGeometry();
const vertices = new Float32Array( [
    -3.0, -1.0,  -5.0,
    0.0, -1.0,  -5.0,
    0.0,  1.0,  -5.0,
] );
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );

const mesh = new THREE.Mesh( geometry, material );

scene.add( mesh );

// Render scene
function render() {
    requestAnimationFrame(render);
    // change background color
    renderer.setClearColor(0xFF0000, 1);

    renderer.render(scene, camera);
}
render();
