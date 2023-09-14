<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte'
	import { BellPlus, LogOut } from 'lucide-svelte'

	import socket from '$lib/webSocketConnection'

	export let userId: string
	export let displayName: string | null

	let disabled = false

	const addQueue = async () => {
		socket.emit('add', { userId: userId, displayName: displayName })
		disabled = true
	}

	$: displayName = displayName ?? 'Anonymous'
</script>

<Button
	on:click={addQueue}
	{disabled}
	variant="default"
	class="flex justify-center items-center gap-2">
	<BellPlus size={20} />
	เพิ่มคิวใหม่
</Button>
