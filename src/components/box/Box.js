import React from 'react';

export default function Box(props) {
    return (
        <mesh position={props.position}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" opacity={props.ghost? 0.5 : 1} transparent />
        </mesh>
    )
}