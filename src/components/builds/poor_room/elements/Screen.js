import React, { useState, useEffect } from 'react';
import Hls from 'hls.js';
import * as THREE from 'three';

export default function Screen(props) {

    const [video] = useState(Object.assign(document.createElement('video')));

    useEffect(() => {
        let hls = null;

        function _initPlayer() {
            if (hls != null) {
                hls.destroy();
            }

            const newHls = new Hls({
                enableWorker: false,
                ...props.hlsConfig,
            });

            newHls.attachMedia(video);

            newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
                newHls.loadSource(props.src);

                newHls.on(Hls.Events.MANIFEST_PARSED, () => {
                    if (props.autoPlay) {
                        video?.play()
                            .catch(() =>
                                console.log(
                                    'Unable to autoplay prior to user interaction with the dom.'
                                )
                            );
                    }
                });
            });

            newHls.on(Hls.Events.ERROR, function (event, data) {
                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            newHls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            newHls.recoverMediaError();
                            break;
                        default:
                            _initPlayer();
                            break;
                    }
                }
            });

            hls = newHls;
        }

        // Check for Media Source support
        if (Hls.isSupported()) {
            _initPlayer();
        }

        return () => {
            if (hls != null) {
                hls.destroy();
            }
        };
    }, [props.autoPlay, props.hlsConfig, video, props.src]);

    return (
        <group {...props}>
            <mesh>
                <planeBufferGeometry args={[53, 25]} />
                <meshBasicMaterial toneMapped={false}>
                    <videoTexture attach="map" color="gray" args={[video]} encoding={THREE.sRGBEncoding} />
                </meshBasicMaterial>
            </mesh>
        </group>
    )
}