<script lang="ts">
	import { collectionStore } from 'sveltefire';
	import { firestore } from '$lib/firebase';
	import { collection, orderBy, query } from 'firebase/firestore';

	interface Queue {
		userId: string;
		displayName: string;
		startDate: string;
		endDate: string;
		status: string;
	}

	let renderQueue: Queue[] = [];

	/* const queueRef = collection(firestore, 'queue');
	const queue_data = collectionStore<Queue[]>(queueRef, 'queue'); */

	const queueRef = collection(firestore, 'queue');
	const q = query(queueRef, orderBy('assingDate', 'desc'));

	// @ts-ignore
	const query_data = collectionStore<Queue>(firestore, q);

	query_data.subscribe((data) => {
		renderQueue = data;
		renderQueue.sort((a, b) => {
			// @ts-ignore
			return b.assingDate.seconds - a.assingDate.seconds;
		});
		renderQueue.reverse();
	});

	const formatTime = (date: string) => {
		// check if date and read a seconds
		if (!date) return;
		// @ts-ignore
		const d = new Date(date.seconds * 1000);

		return `${d.getHours()}:${d.getMinutes()}`;
	};
</script>

<!-- each grid -->

{#each renderQueue as queue, i}
	<div class="grid grid-cols-[1fr_1fr_1fr_1fr]">
		{#if i == 0}
			<div>{i}</div>
			<div>{queue.displayName}</div>
			<div>{queue.status}</div>
			<div>{formatTime(queue.startDate)}</div>
			<div>{formatTime(queue.endDate)}</div>
		{:else}
			<div>{queue.displayName}</div>
			<div>{queue.status}</div>
		{/if}
	</div>
{/each}
