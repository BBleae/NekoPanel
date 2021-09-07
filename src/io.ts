import socketIO from 'socket.io-client'

export default socketIO('https://panel.neko-craft.com', { path: '/NekoPanel' })
