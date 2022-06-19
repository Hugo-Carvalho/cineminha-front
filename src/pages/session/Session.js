import React, { Suspense, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Terrain, PoorRoom } from '../../components';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Axios from 'axios';
import Controler from '../../controlers/CameraControls';
import './style/Session.css';

function Session(props) {
    let { idtSession } = useParams();
    const [session, setSession] = useState();
    const [loading, setLoading] = useState(false);
    const [theStart] = useState("https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8");
    const [theMovie, setTheMovie] = useState("");
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
        var currentDate = new Date(year + "-" + month + "-"+  day + " " + hour + ":" + minute + ":" + seconds)
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
            if (session.src !== theStart) {
                var newSession = {...session};
                newSession.src = theStart;
                newSession.autoPlay = true;
                newSession.controls = false;
                newSession.width = "100%";
                newSession.height = "auto";
                setSession(newSession);
            }
        }
    }

    const joinSession = () => {
        setLoading(true);
        Axios.post('https://re9euy0dja.execute-api.us-east-1.amazonaws.com/default/cineminha', {
            "action": "get",
            "idt": idtSession
        }).then(session => {
            setSession(session.data);
            setTheMovie(session.data.src)
            setJoinRoom(true);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <>
            {!joinRoom ?
                <div className="session-page">
                    <Container>
                        <h1>Bem vindo ao Cineminha</h1>
                        <h2>A sessão ira começar no horario estipulado, mas você pode aguardar na sala.</h2>
                        <Button onClick={() => joinSession()} disabled={loading} variant="outline-light">Entrar na sessão</Button>
                    </Container>
                </div>
                :
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
            }
        </>
    );
}

export default Session;
