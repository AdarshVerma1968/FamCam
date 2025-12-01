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

## Screenshots

### Landing Page
![Landing Page](https://github.com/AdarshVerma1968/FamCam/blob/main/Screenshot%202025-12-01%20115624.png?raw=true)

### SignUp & SignIn Page
![SignUp & SignIn Page](https://github.com/AdarshVerma1968/FamCam/blob/main/Screenshot%202025-12-01%20115646.png?raw=true)

### Meeting Code Interface
![Meeting UI](https://github.com/AdarshVerma1968/FamCam/blob/main/Screenshot%202025-12-01%20115713.png?raw=true)

### Lobby Interface
![Lobby Interface](https://github.com/AdarshVerma1968/FamCam/blob/main/Screenshot%202025-12-01%20115824.png?raw=true)

### Meeting Interface
![Meeting Interface](https://github.com/AdarshVerma1968/FamCam/blob/main/Screenshot%202025-12-01%20115852.png?raw=true)

### Chat Panel
![Chat Panel](https://github.com/AdarshVerma1968/FamCam/blob/main/Screenshot%202025-12-01%20115916.png?raw=true)

### Screen Sharing
![Screen Sharing](https://github.com/AdarshVerma1968/FamCam/blob/main/Screenshot%202025-12-01%20115950.png?raw=true)

### Meeting History
![Meeting History](https://github.com/AdarshVerma1968/FamCam/blob/main/Screenshot%202025-12-01%20120017.png?raw=true)
