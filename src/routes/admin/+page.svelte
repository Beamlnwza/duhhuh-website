<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';

	import Queue from './queue.svelte';
	import User from './user.svelte';

	export let data: PageData;
</script>

<div class="flex justify-center items-center h-full flex-col mx-10 gap-2 mt-10">
	<Queue />
	<User />
</div>
