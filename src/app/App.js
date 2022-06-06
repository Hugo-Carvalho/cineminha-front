import React, { Suspense, useState } from 'react';
import { Terrain, PoorRoom } from '../components';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Controler from '../controler/Controler'

function App() {
    const [session, setSession] = useState({
        "time": "06/06/2022 01:58:00:0000",
        "src": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        "video": Object.assign(document.createElement('video'), { crossOrigin: 'Anonymous' })
    });
    const [theStart] = useState("https://c.tenor.com/4Bq8WXsHd74AAAPo/movie-netflix.mp4");
    const [theEnd] = useState("https://c.tenor.com/BIAJFt7rC9oAAAPo/thats-all.mp4");
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
            var currentTime = (currentDate - new Date(session.time)) / 1000;
            if (currentTime >= 0 && (session.video.src === theStart || session.video.currentTime === 0) && session.video.src !== theEnd) {
                setLightIntensity(0.1);
                session.video.src = session.src;
                session.video.loop = "false";
                session.video.currentTime = currentTime;
                session.video.play();
            } else if (currentTime > session.video.duration && session.video.src !== theEnd) {
                setLightIntensity(0.5);
                if (session.video.currentTime === session.video.duration) {
                    session.video.src = theEnd;
                    session.video.loop = "true";
                    session.video.play();
                }
            }
        } else {
            if (session.video.src !== theStart) {
                session.video.src = theStart;
                session.video.loop = "true";
                session.video.play();
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
