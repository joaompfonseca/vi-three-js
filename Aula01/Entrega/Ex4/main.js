import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creation of a cube
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube ); 

// Camera position
camera.position.z = 5;

// Render scene
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();

// Scene Animation
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

window.addEventListener('resize', () => {
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
