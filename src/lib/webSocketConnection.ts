import ioClient from 'socket.io-client'
const ENDPOINT = 'https://143.198.93.176/'

const socket = ioClient(ENDPOINT, {
	transports: ['websocket']
})

export default socket
