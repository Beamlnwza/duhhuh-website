<script lang="ts">
	import User from './user/user.svelte'
	import Queue from './queue/queue.svelte'
	import '../css/bg.css'

	import socket from '$lib/webSocketConnection'
	import { onMount } from 'svelte'

	onMount(() => {
		socket.on('connection', (socket, room) => {
			console.log('connected')

			console.log(socket.id)
		})
	})
</script>

<div class="grid grid-cols-[2fr_1fr] max-lg:grid-cols-1">
	<div><Queue /></div>
	<div><User /></div>
</div>
