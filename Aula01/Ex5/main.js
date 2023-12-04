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
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

// Creation of a cone
const geometry2 = new THREE.ConeGeometry( -0.5, 1, 32 );
const material2 = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true} );
const cone = new THREE.Mesh( geometry2, material2 );

cone.position.x = -2;

scene.add( cone );

// Creation of a sphere
const geometry3 = new THREE.SphereGeometry( 0.5, 32, 32 );
const material3 = new THREE.MeshBasicMaterial( {color: 0x0000ff, wireframe: true} );
const sphere = new THREE.Mesh( geometry3, material3 );

sphere.position.x = 2;

scene.add( sphere );

// Creation of a cylinder
const geometry4 = new THREE.CylinderGeometry( 0.5, 0.5, 1, 32 );
const material4 = new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe: true} );
const cylinder = new THREE.Mesh( geometry4, material4 );

cylinder.position.y = 2;

scene.add( cylinder );

// Creation of a torus
const geometry5 = new THREE.TorusGeometry( 0.5, 0.2, 16, 100 );
const material5 = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true } );
const torus = new THREE.Mesh( geometry5, material5 );

torus.position.y = -2;

scene.add( torus );

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
