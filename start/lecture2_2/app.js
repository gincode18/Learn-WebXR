import * as THREE from '../../libs/three/three.module.js';
import { OrbitControls } from '../../libs/three/jsm/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
		this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 100 );
		this.camera.position.set( 0, 0, 4 );
        
		this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( '#6A2796' );
		const abmient=new THREE.HemisphereLight(0xffffff,0xbbbbff,0.3);
		this.scene.add(abmient)
		const light =new THREE.DirectionalLight();
		light.position.set(0.2,1,1);
		this.scene.add(light);
		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( this.renderer.domElement );
    
		this.renderer.setAnimationLoop(this.render.bind(this));
		const g=new THREE.BoxBufferGeometry();
		const m=new THREE.MeshStandardMaterial({color:"#FF9900"});
		this.mesh=new THREE.Mesh(g,m);
		this.scene.add(this.mesh)
		const controls=new OrbitControls(this.camera,this.renderer.domElement);
       window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){
       this.camera.aspect=window.innerWidth/window.innerHeight;
	   this.camera.updateProjectionMatrix();
	   this.renderer.setSize(window.innerWidth,window.innerHeight);
    }
    
	render( ) {  
		this.mesh.rotateY(0.01);
        this.renderer.render( this.scene, this.camera );
    }
}

export { App };