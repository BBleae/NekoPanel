import socketIO from 'socket.io-client'

export default socketIO('http://play.neko-craft.com:25565', { path: '/NekoPanel' })
