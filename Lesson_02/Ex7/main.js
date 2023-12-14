import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

//AxisHelper
const axesHelper = new THREE.AxesHelper( 3 );
scene.add( axesHelper );

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


// Create the box
const boxGeometry = new THREE.BoxGeometry(2, 1, 4);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);

// Create the sphere
const sphereGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.rotateZ(Math.PI / 2);
sphere.position.x = 1;
sphere.position.z = -2;
sphere.position.y = -0.5;

// Another sphere 
const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere1.rotateZ(Math.PI / 2);
sphere1.position.x = 1;
sphere1.position.z = 2;
sphere1.position.y = -0.5;

// Another sphere
const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere2.rotateZ(Math.PI / 2);
sphere2.position.x = -1;
sphere2.position.z = 2;
sphere2.position.y = -0.5;

// Another sphere
const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere3.rotateZ(Math.PI / 2);
sphere3.position.x = -1;
sphere3.position.z = -2;
sphere3.position.y = -0.5;

console.log(box.matrix);
console.log(sphere.matrix);

const object = new THREE.Object3D();
object.add(sphere);
object.add(sphere1);
object.add(sphere2);
object.add(sphere3);
object.add(box);

scene.add(object);

// Camera position
camera.position.x = 10;

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// Render scene
function render() {
    requestAnimationFrame(render);

    //add an animation to move the "car" along a predefined circuit
    object.position.z += 0.01;
    if (object.position.z >= 6) {
        object.position.z = -6;
    }

    controls.update();
    renderer.render(scene, camera);
}
render();


