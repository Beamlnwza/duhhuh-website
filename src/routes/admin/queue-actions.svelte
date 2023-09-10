<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import { Trash2 } from 'lucide-svelte'

	export let queueData: string
</script>

<div class="flex flex-row justify-start items-center gap-2">
	<div class="text-lg">{queueData}</div>
	<Button variant="destructive" class="flex"><Trash2 /></Button>
</div>
