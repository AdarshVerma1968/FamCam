# FamCam — Real-Time Video Conferencing App

A fully browser-based, multi-peer video conferencing application built using React, WebRTC, and Socket.IO.
FamCam enables seamless video meetings with chat, screen sharing, and a clean, responsive UI.

## Features
🎥 Real-Time Video Conferencing

Multi-peer video/audio using WebRTC (RTCPeerConnection)

SDP offer/answer exchange + ICE candidate handling

STUN ICE servers for NAT traversal

💬 Real-Time Chat

Instant messaging during calls

Sender/receiver UI, unread message badge, and responsive layout

📺 Screen Sharing

One-click screen share using getDisplayMedia

Switch smoothly between camera and screen stream

Stream replacement across all active peer connections

🎛 Call Controls

Toggle camera, microphone, screen share, and end call

Visual indicators for active controls

Lobby UI: prompt for username before joining the meeting

👥 Dynamic Peer Management

Add/remove remote peers automatically

Update remote streams on join/leave events

Prevent duplicate video elements with accurate refs

🔐 Auth & Meeting History

Auth-aware meeting history (meeting code + formatted date)

Uses AuthContext + React Router for navigation

🛡 Reliability & Edge Cases

Permission handling for camera/mic

Fallback “black + silent” streams if media access fails

Cleanup of tracks and peer connections on exit

Error logging for SDP and ICE events

## Tech Stack
Frontend

React (Functional Components + Hooks)

WebRTC (RTCPeerConnection, getUserMedia, getDisplayMedia)

Socket.IO Client

Material-UI (MUI)

CSS Modules

Backend

Node.js + Express

Socket.IO Server

## Deployment
Frontend → Render Static Site
Backend → Render Web Service
Frontend → Render Static Site

Backend → Render Web Service
