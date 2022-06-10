import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import model from './model.glb?url';

export default function Cinema({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(model)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane064.geometry} material={materials['Material.065']} position={[-14.13, 44.34, -2.92]} scale={[46.47, 31.95, 30.2]} />
      <mesh geometry={nodes.Plane187.geometry} material={materials['Material.068']} position={[28.51, 18.8, -3.67]} rotation={[0, 0, -Math.PI / 2]} scale={[11.99, 11.99, 25.14]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.063']} position={[-11.81, -0.85, 24.39]} scale={[57.86, 0.29, 0.29]} />
      <mesh geometry={nodes.Plane186.geometry} material={materials['Material.059']} position={[-42.55, 15.46, 4.2]} scale={1.63} />
      <mesh geometry={nodes.Plane185.geometry} material={materials['Material.059']} position={[-42.55, 15.46, 0.09]} scale={1.63} />
      <mesh geometry={nodes.Plane184.geometry} material={materials['Material.059']} position={[-42.55, 15.46, -8.12]} scale={1.63} />
      <mesh geometry={nodes.Plane183.geometry} material={materials['Material.059']} position={[-42.55, 15.46, -4.02]} scale={1.63} />
      <mesh geometry={nodes.Plane182.geometry} material={materials['Material.059']} position={[-42.55, 15.46, -12.24]} scale={1.63} />
      <mesh geometry={nodes.Plane181.geometry} material={materials['Material.059']} position={[-42.55, 15.46, -16.35]} scale={1.63} />
      <mesh geometry={nodes.Plane180.geometry} material={materials['Material.059']} position={[-42.55, 15.46, -24.5]} scale={1.63} />
      <mesh geometry={nodes.Plane179.geometry} material={materials['Material.059']} position={[-42.55, 15.46, -20.39]} scale={1.63} />
      <mesh geometry={nodes.Plane178.geometry} material={materials['Material.059']} position={[-42.55, 15.46, -28.72]} scale={1.63} />
      <mesh geometry={nodes.Plane063.geometry} material={materials['Material.059']} position={[-36.25, 13.29, -28.72]} scale={1.63} />
      <mesh geometry={nodes.Plane062.geometry} material={materials['Material.059']} position={[-36.25, 13.29, -20.39]} scale={1.63} />
      <mesh geometry={nodes.Plane061.geometry} material={materials['Material.059']} position={[-36.25, 13.29, -24.5]} scale={1.63} />
      <mesh geometry={nodes.Plane060.geometry} material={materials['Material.059']} position={[-36.25, 13.29, -16.35]} scale={1.63} />
      <mesh geometry={nodes.Plane059.geometry} material={materials['Material.059']} position={[-36.25, 13.29, -12.24]} scale={1.63} />
      <mesh geometry={nodes.Plane058.geometry} material={materials['Material.059']} position={[-36.25, 13.29, -4.02]} scale={1.63} />
      <mesh geometry={nodes.Plane057.geometry} material={materials['Material.059']} position={[-36.25, 13.29, -8.12]} scale={1.63} />
      <mesh geometry={nodes.Plane056.geometry} material={materials['Material.059']} position={[-36.25, 13.29, 0.09]} scale={1.63} />
      <mesh geometry={nodes.Plane055.geometry} material={materials['Material.059']} position={[-36.25, 13.29, 4.2]} scale={1.63} />
      <mesh geometry={nodes.Plane054.geometry} material={materials['Material.059']} position={[-30.23, 11.27, 4.2]} scale={1.63} />
      <mesh geometry={nodes.Plane053.geometry} material={materials['Material.059']} position={[-30.23, 11.27, 0.09]} scale={1.63} />
      <mesh geometry={nodes.Plane052.geometry} material={materials['Material.059']} position={[-30.23, 11.27, -8.12]} scale={1.63} />
      <mesh geometry={nodes.Plane051.geometry} material={materials['Material.059']} position={[-30.23, 11.27, -4.02]} scale={1.63} />
      <mesh geometry={nodes.Plane050.geometry} material={materials['Material.059']} position={[-30.23, 11.27, -12.24]} scale={1.63} />
      <mesh geometry={nodes.Plane049.geometry} material={materials['Material.059']} position={[-30.23, 11.27, -16.35]} scale={1.63} />
      <mesh geometry={nodes.Plane048.geometry} material={materials['Material.059']} position={[-30.23, 11.27, -24.5]} scale={1.63} />
      <mesh geometry={nodes.Plane047.geometry} material={materials['Material.059']} position={[-30.23, 11.27, -20.39]} scale={1.63} />
      <mesh geometry={nodes.Plane046.geometry} material={materials['Material.059']} position={[-30.23, 11.27, -28.72]} scale={1.63} />
      <mesh geometry={nodes.Plane045.geometry} material={materials['Material.059']} position={[-24.38, 9.26, -28.72]} scale={1.63} />
      <mesh geometry={nodes.Plane044.geometry} material={materials['Material.059']} position={[-24.38, 9.26, -20.39]} scale={1.63} />
      <mesh geometry={nodes.Plane043.geometry} material={materials['Material.059']} position={[-24.38, 9.26, -24.5]} scale={1.63} />
      <mesh geometry={nodes.Plane042.geometry} material={materials['Material.059']} position={[-24.38, 9.26, -16.35]} scale={1.63} />
      <mesh geometry={nodes.Plane041.geometry} material={materials['Material.059']} position={[-24.38, 9.26, -12.24]} scale={1.63} />
      <mesh geometry={nodes.Plane040.geometry} material={materials['Material.059']} position={[-24.38, 9.26, -4.02]} scale={1.63} />
      <mesh geometry={nodes.Plane039.geometry} material={materials['Material.059']} position={[-24.38, 9.26, -8.12]} scale={1.63} />
      <mesh geometry={nodes.Plane038.geometry} material={materials['Material.059']} position={[-24.38, 9.26, 0.09]} scale={1.63} />
      <mesh geometry={nodes.Plane037.geometry} material={materials['Material.059']} position={[-24.38, 9.26, 4.2]} scale={1.63} />
      <mesh geometry={nodes.Plane036.geometry} material={materials['Material.059']} position={[-18.21, 7.21, 4.2]} scale={1.63} />
      <mesh geometry={nodes.Plane035.geometry} material={materials['Material.059']} position={[-18.21, 7.21, 0.09]} scale={1.63} />
      <mesh geometry={nodes.Plane034.geometry} material={materials['Material.059']} position={[-18.21, 7.21, -8.12]} scale={1.63} />
      <mesh geometry={nodes.Plane033.geometry} material={materials['Material.059']} position={[-18.21, 7.21, -4.02]} scale={1.63} />
      <mesh geometry={nodes.Plane032.geometry} material={materials['Material.059']} position={[-18.21, 7.21, -12.24]} scale={1.63} />
      <mesh geometry={nodes.Plane031.geometry} material={materials['Material.059']} position={[-18.21, 7.21, -16.35]} scale={1.63} />
      <mesh geometry={nodes.Plane030.geometry} material={materials['Material.059']} position={[-18.21, 7.21, -24.5]} scale={1.63} />
      <mesh geometry={nodes.Plane029.geometry} material={materials['Material.059']} position={[-18.21, 7.21, -20.39]} scale={1.63} />
      <mesh geometry={nodes.Plane028.geometry} material={materials['Material.059']} position={[-18.21, 7.21, -28.72]} scale={1.63} />
      <mesh geometry={nodes.Plane025.geometry} material={materials['Material.059']} position={[-12.26, 5.44, -28.72]} scale={1.63} />
      <mesh geometry={nodes.Plane024.geometry} material={materials['Material.059']} position={[-12.26, 5.44, -20.39]} scale={1.63} />
      <mesh geometry={nodes.Plane023.geometry} material={materials['Material.059']} position={[-12.26, 5.44, -24.5]} scale={1.63} />
      <mesh geometry={nodes.Plane022.geometry} material={materials['Material.059']} position={[-12.26, 5.44, -16.35]} scale={1.63} />
      <mesh geometry={nodes.Plane021.geometry} material={materials['Material.059']} position={[-12.26, 5.44, -12.24]} scale={1.63} />
      <mesh geometry={nodes.Plane020.geometry} material={materials['Material.059']} position={[-12.26, 5.44, -4.02]} scale={1.63} />
      <mesh geometry={nodes.Plane019.geometry} material={materials['Material.059']} position={[-12.26, 5.44, -8.12]} scale={1.63} />
      <mesh geometry={nodes.Plane018.geometry} material={materials['Material.059']} position={[-12.26, 5.44, 0.09]} scale={1.63} />
      <mesh geometry={nodes.Plane017.geometry} material={materials['Material.059']} position={[-12.26, 5.44, 4.2]} scale={1.63} />
      <mesh geometry={nodes.Plane027.geometry} material={materials['Material.059']} position={[-6.56, 3.34, 4.2]} scale={1.63} />
      <mesh geometry={nodes.Plane026.geometry} material={materials['Material.059']} position={[-6.56, 3.34, 0.09]} scale={1.63} />
      <mesh geometry={nodes.Plane016.geometry} material={materials['Material.059']} position={[-6.56, 3.34, -8.12]} scale={1.63} />
      <mesh geometry={nodes.Plane015.geometry} material={materials['Material.059']} position={[-6.56, 3.34, -4.02]} scale={1.63} />
      <mesh geometry={nodes.Plane014.geometry} material={materials['Material.059']} position={[-6.56, 3.34, -12.24]} scale={1.63} />
      <mesh geometry={nodes.Plane013.geometry} material={materials['Material.059']} position={[-6.56, 3.34, -16.35]} scale={1.63} />
      <mesh geometry={nodes.Plane012.geometry} material={materials['Material.059']} position={[-6.56, 3.34, -24.5]} scale={1.63} />
      <mesh geometry={nodes.Plane011.geometry} material={materials['Material.059']} position={[-6.56, 3.34, -20.39]} scale={1.63} />
      <mesh geometry={nodes.Plane010.geometry} material={materials['Material.059']} position={[-6.56, 3.34, -28.72]} scale={1.63} />
      <mesh geometry={nodes.Plane007.geometry} material={materials['Material.059']} position={[0, 1.56, -28.72]} scale={1.63} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material.059']} position={[0, 1.56, -20.39]} scale={1.63} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['Material.059']} position={[0, 1.56, -24.5]} scale={1.63} />
      <mesh geometry={nodes.Plane004.geometry} material={materials['Material.059']} position={[0, 1.56, -16.35]} scale={1.63} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Material.059']} position={[0, 1.56, -12.24]} scale={1.63} />
      <mesh geometry={nodes.Plane177.geometry} material={materials['Material.067']} position={[-14.13, 44.34, -2.92]} scale={[46.47, 31.95, 30.2]} />
      <mesh geometry={nodes.Text002.geometry} material={materials['Material.055']} position={[11.76, 11, -31.78]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text039.geometry} material={materials['Material.062']} position={[-54.67, 18.74, 5.81]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text038.geometry} material={materials['Material.062']} position={[-37.05, 12.58, 5.81]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text037.geometry} material={materials['Material.062']} position={[-43.25, 14.64, 5.81]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text036.geometry} material={materials['Material.062']} position={[-48.97, 16.71, 5.81]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane121.geometry} material={nodes.Plane121.material} position={[-58.76, 26.83, -6.27]} rotation={[0, 0, -Math.PI / 2]} scale={[1.1, 1, 10.16]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.057']} position={[-60.56, 3.54, 17.6]} scale={[0.39, -5.9, 5.36]} />
      <mesh geometry={nodes.Text035.geometry} material={materials['Material.062']} position={[-30.91, 10.5, 5.81]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text034.geometry} material={materials['Material.062']} position={[-25.2, 8.43, 5.81]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text033.geometry} material={materials['Material.062']} position={[-19, 6.36, 5.81]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text032.geometry} material={materials['Material.062']} position={[-13.04, 4.67, 5.81]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text031.geometry} material={materials['Material.062']} position={[-6.81, 2.54, 5.81]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text030.geometry} material={materials['Material.062']} position={[-0.7, 0.8, -2.42]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.057']} position={[16.53, 4.01, -32.54]} scale={[3.27, 5.09, 0.55]} />
      <mesh geometry={nodes.Text028.geometry} material={materials['Material.062']} position={[-6.92, 4.49, 6]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text027.geometry} material={materials['Material.062']} position={[-6.92, 4.49, 2.56]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text026.geometry} material={materials['Material.062']} position={[-6.92, 4.49, 1.89]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text025.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -1.52]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text024.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -2.2]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text023.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -5.64]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text022.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -6.34]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text021.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -9.75]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text020.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -10.42]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text019.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -13.86]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text018.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -17.94]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text017.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -14.5]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text016.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -18.66]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text015.geometry} material={materials['Material.062']} position={[-6.92, 4.49, -22.1]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text012.geometry} material={materials['Material.062']} position={[-0.31, 2.54, -18.61]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text011.geometry} material={materials['Material.062']} position={[-0.31, 2.54, -22.06]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text010.geometry} material={materials['Material.062']} position={[-0.31, 2.54, -17.98]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text009.geometry} material={materials['Material.062']} position={[-0.31, 2.54, -14.53]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text008.geometry} material={materials['Material.062']} position={[-0.31, 2.54, -13.86]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text007.geometry} material={materials['Material.062']} position={[-0.31, 2.54, -10.45]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text006.geometry} material={materials['Material.062']} position={[-0.31, 2.54, -9.75]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text005.geometry} material={materials['Material.062']} position={[-0.31, 2.54, -6.31]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text004.geometry} material={materials['Material.062']} position={[-0.31, 2.54, -5.64]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text003.geometry} material={materials['Material.062']} position={[-0.31, 2.54, -2.22]} rotation={[0, 1.57, 0]} scale={0.28} />
      <mesh geometry={nodes.Text001.geometry} material={materials['Material.062']} position={[-3.32, 1.43, 2.67]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.4} />
      <mesh geometry={nodes.Plane120.geometry} material={materials['Material.058']} position={[-58.89, 39.74, -3.83]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 3.41]} />
      <mesh geometry={nodes.Plane119.geometry} material={materials['Material.058']} position={[-58.89, 37.13, -7.02]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.18, 1, 2.81]} />
      <mesh geometry={nodes.Plane118.geometry} material={materials['Material.058']} position={[-58.89, 37.13, -0.57]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.18, 1, 2.81]} />
      <mesh geometry={nodes.Plane117.geometry} material={materials['Material.058']} position={[-58.89, 34.53, -3.83]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 3.41]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.061']} position={[-32.7, 28.55, 24.91]} rotation={[0, Math.PI / 2, 0]} scale={[0.97, 0.79, 28.21]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.061']} position={[-32.7, 28.55, -32.42]} rotation={[0, Math.PI / 2, 0]} scale={[0.97, 0.79, 28.21]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.061']} position={[-59.97, 28.55, -3.83]} scale={[0.97, 0.79, 28.21]} />
      <mesh geometry={nodes.Text.geometry} material={materials['Material.055']} position={[-58.97, 9.7, 18.51]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Cylinder022.geometry} material={materials['Material.060']} position={[-39.4, 13.74, 18.59]} rotation={[Math.PI / 2, 0, 0]} scale={[0.23, 8, 0.23]} />
      <mesh geometry={nodes.Cylinder021.geometry} material={materials['Material.060']} position={[1.33, 0.91, 10.75]} rotation={[0, 0, -Math.PI / 2]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder020.geometry} material={materials['Material.060']} position={[1.33, 2.26, 10.75]} rotation={[0, 0, -Math.PI / 2]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder019.geometry} material={materials['Material.060']} position={[-39.4, 14.71, 18.59]} rotation={[Math.PI / 2, 0, 0]} scale={[0.23, 8, 0.23]} />
      <mesh geometry={nodes.Cylinder018.geometry} material={materials['Material.060']} position={[-39.4, 15.87, 18.59]} rotation={[Math.PI / 2, 0, 0]} scale={[0.23, 8, 0.23]} />
      <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.060']} position={[-39.4, 14.42, 23.64]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials['Material.060']} position={[-39.4, 14.25, 16.95]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Plane116.geometry} material={materials['Material.059']} position={[-42.66, 15.43, 13.52]} scale={1.63} />
      <mesh geometry={nodes.Plane115.geometry} material={materials['Material.059']} position={[-42.66, 15.43, 17.63]} scale={1.63} />
      <mesh geometry={nodes.Plane114.geometry} material={materials['Material.059']} position={[-42.66, 15.43, 21.74]} scale={1.63} />
      <mesh geometry={nodes.Plane113.geometry} material={materials['Material.059']} position={[-48.61, 17.63, 21.74]} scale={1.63} />
      <mesh geometry={nodes.Plane112.geometry} material={materials['Material.059']} position={[-48.61, 17.63, 17.63]} scale={1.63} />
      <mesh geometry={nodes.Plane111.geometry} material={materials['Material.059']} position={[-48.61, 17.63, 13.52]} scale={1.63} />
      <mesh geometry={nodes.Plane110.geometry} material={materials['Material.059']} position={[-54.51, 19.58, 13.52]} scale={1.63} />
      <mesh geometry={nodes.Plane109.geometry} material={materials['Material.059']} position={[-54.51, 19.58, 17.63]} scale={1.63} />
      <mesh geometry={nodes.Plane008.geometry} material={materials['Material.059']} position={[-54.51, 19.58, 21.74]} scale={1.63} />
      <mesh geometry={nodes.Cylinder017.geometry} material={materials['Material.060']} position={[-1.14, 0.77, 6.07]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1.21, 0.18]} />
      <mesh geometry={nodes.Cylinder016.geometry} material={materials['Material.060']} position={[-1.14, 1.55, 6.07]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1.21, 0.18]} />
      <mesh geometry={nodes.Cylinder015.geometry} material={materials['Material.060']} position={[-1.14, 2.32, 6.07]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1.21, 0.18]} />
      <mesh geometry={nodes.Cylinder014.geometry} material={materials['Material.060']} position={[-1.14, 2.97, 6.07]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1.21, 0.18]} />
      <mesh geometry={nodes.Cylinder013.geometry} material={materials['Material.060']} position={[-1.14, 3.69, 6.07]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1.21, 0.18]} />
      <mesh geometry={nodes.Cylinder012.geometry} material={materials['Material.060']} position={[0.2, 1.19, 6.07]} scale={[0.2, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder011.geometry} material={materials['Material.060']} position={[-2.95, 1.19, 4.4]} scale={[0.2, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder010.geometry} material={materials['Material.060']} position={[-2.95, 1.19, 0.5]} scale={[0.2, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.060']} position={[0.17, 1.19, -1.29]} scale={[0.2, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.060']} position={[1.33, 3.56, 10.75]} rotation={[0, 0, -Math.PI / 2]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.060']} position={[-4.55, 1.19, 10.75]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['Material.060']} position={[-27.98, 10.35, 10.75]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.060']} position={[-39.4, 14.25, 10.75]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.060']} position={[-19.63, 7.4, 10.75]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.060']} position={[-10.37, 4.43, 10.75]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.060']} position={[3.58, 1.19, 10.75]} scale={[0.23, 2.51, 0.23]} />
      <mesh geometry={nodes.Plane108.geometry} material={materials['Material.058']} position={[-41.95, 12.88, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane107.geometry} material={materials['Material.058']} position={[-44.95, 13.88, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane106.geometry} material={materials['Material.058']} position={[-53.94, 16.87, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane105.geometry} material={materials['Material.058']} position={[-50.94, 15.88, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane104.geometry} material={materials['Material.058']} position={[-47.96, 14.87, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane103.geometry} material={materials['Material.058']} position={[-33, 9.84, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane102.geometry} material={materials['Material.058']} position={[-35.98, 10.85, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane101.geometry} material={materials['Material.058']} position={[-38.98, 11.84, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane100.geometry} material={materials['Material.058']} position={[-29.99, 8.85, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane099.geometry} material={materials['Material.058']} position={[-26.99, 7.85, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane098.geometry} material={materials['Material.058']} position={[-24.01, 6.85, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane097.geometry} material={materials['Material.058']} position={[-21.01, 5.84, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane096.geometry} material={materials['Material.058']} position={[-18.01, 4.84, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane095.geometry} material={materials['Material.058']} position={[-14.99, 3.85, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane094.geometry} material={materials['Material.058']} position={[-11.99, 2.85, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane093.geometry} material={materials['Material.058']} position={[-8.95, 1.86, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane092.geometry} material={materials['Material.058']} position={[-5.98, 0.85, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane091.geometry} material={materials['Material.058']} position={[-2.92, -0.18, 8.89]} rotation={[0, 0, -Math.PI / 2]} scale={[0.18, 1, 2.27]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.064']} position={[1.22, -1.03, 8.9]} scale={[4.07, 1, -2.25]} />
      <mesh geometry={nodes.Plane090.geometry} material={materials['Material.059']} position={[-54.68, 19.58, 4.2]} scale={1.63} />
      <mesh geometry={nodes.Plane089.geometry} material={materials['Material.059']} position={[-54.68, 19.58, 0.09]} scale={1.63} />
      <mesh geometry={nodes.Plane088.geometry} material={materials['Material.059']} position={[-54.68, 19.58, -8.12]} scale={1.63} />
      <mesh geometry={nodes.Plane087.geometry} material={materials['Material.059']} position={[-54.68, 19.58, -4.02]} scale={1.63} />
      <mesh geometry={nodes.Plane086.geometry} material={materials['Material.059']} position={[-54.68, 19.58, -20.45]} scale={1.63} />
      <mesh geometry={nodes.Plane085.geometry} material={materials['Material.059']} position={[-54.68, 19.58, -24.56]} scale={1.63} />
      <mesh geometry={nodes.Plane084.geometry} material={materials['Material.059']} position={[-54.68, 19.58, -16.34]} scale={1.63} />
      <mesh geometry={nodes.Plane083.geometry} material={materials['Material.059']} position={[-54.68, 19.58, -12.23]} scale={1.63} />
      <mesh geometry={nodes.Plane082.geometry} material={materials['Material.059']} position={[-54.68, 19.58, -28.7]} scale={1.63} />
      <mesh geometry={nodes.Plane081.geometry} material={materials['Material.059']} position={[-48.78, 17.63, -28.7]} scale={1.63} />
      <mesh geometry={nodes.Plane080.geometry} material={materials['Material.059']} position={[-48.78, 17.63, -12.23]} scale={1.63} />
      <mesh geometry={nodes.Plane079.geometry} material={materials['Material.059']} position={[-48.78, 17.63, -16.34]} scale={1.63} />
      <mesh geometry={nodes.Plane078.geometry} material={materials['Material.059']} position={[-48.78, 17.63, -24.56]} scale={1.63} />
      <mesh geometry={nodes.Plane077.geometry} material={materials['Material.059']} position={[-48.78, 17.63, -20.45]} scale={1.63} />
      <mesh geometry={nodes.Plane076.geometry} material={materials['Material.059']} position={[-48.78, 17.63, -4.02]} scale={1.63} />
      <mesh geometry={nodes.Plane075.geometry} material={materials['Material.059']} position={[-48.78, 17.63, -8.12]} scale={1.63} />
      <mesh geometry={nodes.Plane074.geometry} material={materials['Material.059']} position={[-48.78, 17.63, 0.09]} scale={1.63} />
      <mesh geometry={nodes.Plane073.geometry} material={materials['Material.059']} position={[-48.78, 17.63, 4.2]} scale={1.63} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.059']} position={[0, 1.56, -4.02]} scale={1.63} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.059']} position={[0, 1.56, -8.12]} scale={1.63} />
      <mesh geometry={nodes.Plane009.geometry} material={materials['Material.056']} position={[1.2, -1.01, -12.66]} scale={[4.1, 1, 19.32]} />
    </group>
  )
}

useGLTF.preload(model)
