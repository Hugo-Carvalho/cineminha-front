import React from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import grass from './grass.png';

export default function Terrain(props) {
    return (
        <group>
            <mesh
                position={[0, -63, 5, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                receiveShadow
            >
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshLambertMaterial attach="material" map={useLoader(THREE.TextureLoader, grass)} />
            </mesh>
        </group>
    )
}