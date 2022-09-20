let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene({color: 0x000814});

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({antialias: true});

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffc300} );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 10;
}


function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += Math.random() * 2 / 30;
    cube.rotation.y += Math.random() * 2 / 70;
    cube.rotation.z += Math.random() * 2 / 50;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
