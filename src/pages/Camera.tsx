import React from 'react';
import {Firestore} from "@firebase/firestore";

interface CameraProps {
    id: string
}


export default function Camera({id}: CameraProps) {
    let camSource: string = "http://127.0.0.1:5000/cam/" + id;
    return <iframe width="100%" frameBorder="0" src={camSource}></iframe>
}
