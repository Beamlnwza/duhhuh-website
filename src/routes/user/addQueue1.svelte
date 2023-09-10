<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { BellPlus, LogOut } from 'lucide-svelte';

	import socket from '$lib/webSocketConnection';

	export let userId: string;
	export let displayName: string | null;

	let disabled = false;

	const addQueue = async () => {
		socket.emit('addQueue', { userId: userId, displayName: displayName });
		disabled = true;

		// delay 1s
		await new Promise((r) => setTimeout(r, 1000));

		disabled = false;
	};

	$: displayName = displayName ?? 'Anonymous';
</script>

<Button
	on:click={addQueue}
	{disabled}
	variant="default"
	class="flex justify-center items-center gap-2">
	<BellPlus size={20} />
	เพิ่มคิวใหม่
</Button>
