import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const DISTANCE_FROM_EARTH = 356400;
const PERIOD = 28;
const INCLINATION = 0.089;
const SIZE_IN_EARTHS = 1 / 3.7;
const EARTH_RADIUS = 6371;

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//var aspectRatio = window.innerWidth / window.innerHeight;
//var top = 3 / aspectRatio;
//var bottom = -3 / aspectRatio;
//var camera = new THREE.OrthographicCamera( -3, 3, top, bottom, 1, 1000 );

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//AmbientLight
const alight = new THREE.AmbientLight(0x333333);
scene.add(alight);

//directional light with direction (1,0,0) and with the value 0xffffff
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1,0,0);
scene.add(light);

// Creation of moon
const geometryMoon = new THREE.SphereGeometry(SIZE_IN_EARTHS,32,32);

var texloader = new THREE.TextureLoader();
var texMoon = texloader.load("../moon_1024.jpg");

const materialMoon = new THREE.MeshPhongMaterial( { map: texMoon} );

const moon = new THREE.Mesh( geometryMoon, materialMoon );

var distance = DISTANCE_FROM_EARTH / EARTH_RADIUS;
moon.position.set(Math.sqrt(distance / 2), 0,-Math.sqrt(distance / 2));

// Creation of a sphere
const geometry = new THREE.SphereGeometry(1,32,32);
var tex = texloader.load("../earth_surface_2048.jpg");

const material = new THREE.MeshPhongMaterial( { map: tex} ); 

const earth = new THREE.Mesh( geometry, material );

earth.add(moon);

scene.add( earth );

// Camera position
camera.position.z = 5;

// Add OrbitControls so that we can pan around with the mouse
const controls = new OrbitControls(camera, renderer.domElement);

var z = 0.41;

var y = 0.00025;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event){ 
    // Get the key code of the pressed key 
    var keyCode = event.which;
    console.log(keyCode);
    if(keyCode==76){ //l
        //verify if the light is on
        if(light.intensity == 0){
            light.intensity = 1;
        } else {
            light.intensity = 0;
        }  
    };
    if(keyCode==107) {
        light.intensity += 1;
    } else if(keyCode==109) {
        light.intensity -= 1;
    }
    if(keyCode==37){ //left arrow
        z = z - 0.01;
    } else if(keyCode==39){ //right arrow
        z = z + 0.01;
    }
    if(keyCode==38){ //up arrow
        y = y + 0.00025;
    } else if(keyCode==40){ //down arrow
        y = y/2;
    }
}


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

    //fixed rotation on the z axis of 0.41 rad
    earth.rotation.z = z;

    //rotation around the y axis of 0.0025 rad
    earth.rotateOnAxis(new THREE.Vector3(0,1,0),y);

    moon.rotation.y = Math.PI;
    moon.rotation.x = INCLINATION;
    moon.rotation.y += (earth.rotation.y / PERIOD);

    renderer.render(scene, camera);
}
render();
