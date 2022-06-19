import React from 'react';
import Screen from './elements/Screen';
import Cinema from './elements/Cinema';


export default function PoorRoom(props) {
    return (
        <group {...props}>
            <Cinema rotation={[0, 90 * Math.PI / 180, 0]} position={[8, -15, -33]} />
            <Screen position={[4, 4, -61.5]} {...props.session} />
        </group>
    )
}