import React from "react";
import useSpeechToText from 'react-hook-speech-to-text';
import "./App.css";

export default function recorder() {
    const {
        error,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        timeout: 1000,
    });

    if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

    const onHomeClick = () => {
      console.log("Home Clicked");
    } 

    const onReceiveClick = () => {
      console.log("Receive Click");
    } 

    const onSyncClick = () => {
      console.log("Sync Click");
    } 

    return (
    <div>
        <button className = "btn-primary" onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        <button className = "btn-primary" onClick={onHomeClick}>Home</button>
        <button className = "btn-primary" onClick={onReceiveClick}>Receive</button>
        <button className = "btn-primary" onClick={onSyncClick}>Sync</button>
        { !isRecording && results.length > 0 && results[results.length - 1].includes("home") ? onHomeClick() : ""}
        { !isRecording && results.length > 0 && results[results.length - 1].includes("receive") ? onReceiveClick() : ""}
        { !isRecording && results.length > 0 && results[results.length - 1].includes("sync") ? onSyncClick() : ""}
        <h4>Recording: {isRecording.toString()}</h4>
        <ul>
        {results.map((result, index) => (
            <li key={index}>{result}</li>
        ))}
        </ul>
    </div>
    );
}