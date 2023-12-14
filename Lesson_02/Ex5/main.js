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

// Creation of a sphere of radius 1
const geometry = new THREE.SphereGeometry(1, 10, 10);
const material = new THREE.MeshPhongMaterial({
    color: '#006063',
specular: '#a9fcff',
shininess: 100,
});
const sphere = new THREE.Mesh( geometry, material ); 
sphere.position.x = -2.5;
scene.add( sphere ); 

// Another sphere with a different material
const gold = new THREE.MeshPhongMaterial({
    shading: THREE.SmoothShading    });
    gold.color = new THREE.Color(0.75164, 0.60648, 0.22648);
    gold.specular= new THREE.Color(0.628281, 0.555802, 0.366065);
    gold.shininess = 0.4 * 256;
const sphere1 = new THREE.Mesh( geometry, gold ); 
sphere1.position.x = 2.5;
scene.add( sphere1 );

// Another sphere with slightly larger radius around sphere1
const geometry1 = new THREE.SphereGeometry(1.1, 10, 10);
const glassMaterial = new THREE.MeshPhongMaterial( { 
    color: 0x222222, 
    specular: 0xFFFFFF,
    shininess: 100, 
    opacity: 0.7, 
    transparent: true 
    } );
const sphere2 = new THREE.Mesh( geometry1, glassMaterial );
sphere2.position.x = 2.5;
scene.add( sphere2 );

// Another sphere with slightly larger radius around sphere
const sphere3 = new THREE.Mesh( geometry1, glassMaterial );
sphere3.position.x = -2.5;
scene.add( sphere3 );

// Camera position
camera.position.z = 5;

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// Render scene
function render() {
    requestAnimationFrame(render);
    controls.update();
    renderer.render(scene, camera);
}
render();


