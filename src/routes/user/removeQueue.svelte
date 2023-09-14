<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte'
	import socket from '$lib/webSocketConnection'

	import { auth } from '$lib/firebase'

	let disabled = false

	const removeQueue = () => {
		if (auth.currentUser) {
			socket.emit('remove', { userId: auth.currentUser.uid })
		}

		disabled = true
	}
</script>

<Button on:click={removeQueue} {disabled} variant="destructive">ลบเลย!</Button>
