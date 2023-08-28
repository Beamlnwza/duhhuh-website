<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';

	import Queue from './queue.svelte';
	import User from './user.svelte';
	import { getFirebaseContext } from 'sveltefire';
	import { onMount } from 'svelte';

	const { auth } = getFirebaseContext();

	onMount(async () => {
		if (!auth) {
			window.location.href = '/login';
		}

		auth?.onAuthStateChanged((user) => {
			if (!user) {
				window.location.href = '/login';
			}
		});
	});

	export let data: PageData;
</script>

<div class="flex justify-center items-center h-full flex-col mx-10 gap-2 mt-10">
	<Queue />
	<User />
</div>
