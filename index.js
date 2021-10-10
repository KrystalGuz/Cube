// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#D8BFD8")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

// basic cube
var geometry = new THREE.BoxGeometry( 2, 2, 2)
var material = new THREE.MeshStandardMaterial( { color: 0x191970, flatShading: true, metalness: -10, roughness: 1 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

// wireframe cube
var geometry = new THREE.BoxGeometry( 3.6, 3.6, 3.6)
var material = new THREE.MeshBasicMaterial( {
	color: "#FFFFF0", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

// ambient light
var ambientLight = new THREE.AmbientLight ( 0xF0FFF0, 0.1)
scene.add( ambientLight )

// point light
var pointLight = new THREE.PointLight( 0xffffff, 0.7 );
pointLight.position.set( 25, 37, 25 );
scene.add( pointLight );


function animate() {
	requestAnimationFrame( animate )
	cube.rotation.x += 0.005;
	cube.rotation.y += 0.005;
	wireframeCube.rotation.x -= 0.15;
	wireframeCube.rotation.y -= 0.0;
	renderer.render( scene, camera )
}
animate()