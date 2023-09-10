<script lang="ts">
	import { collectionStore } from 'sveltefire'
	import { firestore } from '$lib/firebase'
	import { collection, orderBy, query } from 'firebase/firestore'
	import { onDestroy } from 'svelte'

	import Table from './table.svelte'

	interface Queue {
		userId: string
		displayName: string
		startDate: string
		endDate: string
		status: string
		assignDate: string
	}

	let renderQueue: Queue[] = []

	/* const queueRef = collection(firestore, 'queue');
	const queue_data = collectionStore<Queue[]>(queueRef, 'queue'); */

	const queueRef = collection(firestore, 'queue')
	const q = query(queueRef, orderBy('assignDate', 'desc'))

	// @ts-ignore
	const query_data = collectionStore<Queue>(firestore, q)

	const unsub = query_data.subscribe((data) => {
		renderQueue = data
		renderQueue.sort((a, b) => {
			// @ts-ignore
			return b.assignDate.seconds - a.assignDate.seconds
		})
		renderQueue.reverse()

		console.log(renderQueue)
	})

	const formatTime = (date: string) => {
		// check if date and read a seconds
		if (!date) return
		// @ts-ignore
		const d = new Date(date.seconds * 1000)

		return `${d.getHours()}:${d.getMinutes()}`
	}

	onDestroy(() => {
		unsub
	})
</script>

<!-- each grid -->

{#each renderQueue as queue, i}
	<div class="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
		{#if i == 0}
			<div>{i + 1}</div>
			<div>{queue.displayName}</div>

			<div>{formatTime(queue.startDate)}</div>
			<div>{formatTime(queue.endDate)}</div>
			<div>{formatTime(queue.assignDate)}</div>

			<div>{queue.status}</div>
		{:else}
			<Table
				queue={{
					displayName: queue.displayName,
					queueOrder: i + 1,
					status: queue.status,
					time: ((i + 1) * 60).toLocaleString()
				}} />
		{/if}
	</div>
{/each}
