import React from 'react';
import * as THREE from 'three';

export default function Screen(props) {
    return (
        <group {...props}>
            <mesh>
                <planeBufferGeometry args={[53, 25]} />
                <meshBasicMaterial toneMapped={false}>
                    <videoTexture attach="map" color="gray" args={[props.video]} encoding={THREE.sRGBEncoding} />
                </meshBasicMaterial>
            </mesh>
        </group>
    )
}