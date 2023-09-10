<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte'
	import socket from '$lib/webSocketConnection'

	import { auth } from '$lib/firebase'

	const removeQueue = () => {
		if (auth.currentUser) {
			socket.emit('removeQueue', auth.currentUser.uid)
		}
	}
</script>

<Button on:click={removeQueue} variant="destructive">ลบเลย!</Button>
