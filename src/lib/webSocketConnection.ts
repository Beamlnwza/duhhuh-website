import ioClient from 'socket.io-client'
const ENDPOINT = 'http://localhost:8000'

const socket = ioClient(ENDPOINT, {
	transports: ['websocket']
})

export default socket
