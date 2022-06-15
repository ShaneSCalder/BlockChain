//New Scene - first Scene 
const scene = new THREE.Scene();
//scene.background = new THREE.Color(0xff8080)

// Camera and configeration 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Add scene lighting 
const ambient_light = new THREE.AmbientLight(0x404040);
const direction_light = new THREE.DirectionalLight(0xff8080, 1);
ambient_light.add(direction_light);
scene.add(ambient_light)

// Adding a cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// Animate the scene
function animate() {
    // cube rotation, camera position 
    cube.rotation.x += .05
    cube.rotation.y += .05
    // cube.rotation.z += .05
    // camera.position.x += .01
    // camera.position.y -= .01
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

renderer.render( scene, camera );
