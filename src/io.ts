import socketIO from 'socket.io-client'

export default socketIO('http://play.nekocraft.net:25565', { path: '/NekoPanel' })
