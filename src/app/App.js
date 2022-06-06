import React, { Suspense, useState } from 'react';
import { Terrain, PoorRoom } from '../components';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Controler from '../controler/Controler'

function App() {
    const [session, setSession] = useState({
        "time": "05/06/2022 22:57:00:0000",
        "video": Object.assign(document.createElement('video'), {
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
            crossOrigin: 'Anonymous'
        })
    });
    const [joinRoom, setJoinRoom] = useState(false);
    const [lightIntensity, setLightIntensity] = useState(0.5);

    const beginSession = () => {
        var fullDate = new Date();
        var day = fullDate.getDate();
        var month = fullDate.getMonth() + 1;
        var year = fullDate.getFullYear();
        var hour = fullDate.getHours();
        var minute = fullDate.getMinutes();
        var seconds = fullDate.getSeconds();
        var milliseconds = fullDate.getMilliseconds();
        var currentDate = new Date(day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + seconds + ":" + milliseconds)
        if (new Date(session.time) <= currentDate) {
            setLightIntensity(0.1);
            var currentTime = (currentDate - new Date(session.time) / 1000);
            if (currentTime > 0 && session.video.currentTime === 0) {
                session.video.currentTime = currentTime;
                session.video.play();
            } else if (currentTime > session.video.duration) {
                session.video.stop();
                setLightIntensity(0.5);
            }
        }
    }

    return (
        <>
            {joinRoom ?
                <Canvas id="cineminha-container" shadows>
                    <Suspense fallback={<></>}>
                        <Controler beginSession={beginSession} />
                        <Sky
                            distance={450000}
                            sunPosition={[5, 50, 5]}
                            inclination={0}
                            azimuth={0.25}
                        />
                        <directionalLight
                            castShadow
                            position={[50, 70, 30]}
                            intensity={lightIntensity}
                            shadow-mapSize-shadowMapWidth={2048}
                            shadow-mapSize-shadowMapHeight={2048}
                            shadow-camera-left={-10}
                            shadow-camera-right={10}
                            shadow-camera-top={-50}
                            shadow-camera-bottom={10}
                        />
                        <directionalLight
                            castShadow
                            position={[-50, 70, 30]}
                            intensity={lightIntensity}
                            shadow-mapSize-shadowMapWidth={2048}
                            shadow-mapSize-shadowMapHeight={2048}
                            shadow-camera-left={-10}
                            shadow-camera-right={10}
                            shadow-camera-top={-50}
                            shadow-camera-bottom={10}
                        />
                        <Physics>
                            <Terrain />
                            <PoorRoom session={session} />
                        </Physics>
                    </Suspense>
                </Canvas>
                :
                <button onClick={() => {
                    setJoinRoom(true)
                }}></button>
            }
        </>
    );
}

export default App;
