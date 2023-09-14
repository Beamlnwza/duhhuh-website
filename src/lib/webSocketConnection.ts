import ioClient from 'socket.io-client'
const ENDPOINT = 'https://lobster-app-t4kh5.ondigitalocean.app/'

const socket = ioClient(ENDPOINT, {
	transports: ['websocket']
})

export default socket
