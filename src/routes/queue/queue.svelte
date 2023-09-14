<script context="module" lang="ts">
	export interface Queue {
		userId: string
		displayName: string
		startDate: string
		endDate: string
		status: string
		assignDate: string
	}
</script>

<script lang="ts">
	import { collectionStore } from 'sveltefire'
	import { firestore } from '$lib/firebase'
	import { collection, orderBy, query } from 'firebase/firestore'
	import { onDestroy } from 'svelte'
	import Active from './active.svelte'

	import Table from './table.svelte'

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
	})

	const formatTime = (date: string) => {
		// check if date and read a seconds
		if (!date) return
		// @ts-ignore
		const d = new Date(date.seconds * 1000)

		// sometime it's 22:44:4 so we need to add 0 in front of it
		const addZero = (i: number) => {
			if (i < 10) {
				return '0' + i
			}
			return i
		}

		return `${addZero(d.getHours())}:${addZero(d.getMinutes())}:${addZero(d.getSeconds())}`
	}

	onDestroy(() => {
		unsub
	})
</script>

<div class="h-screen w-full flex justify-center items-center max-lg:h-min">
	{#if renderQueue.length == 0}
		<div class="flex justify-center items-center flex-col py-2 px-2">
			<p class="text-2xl">ไม่เจอคิว ณ ขนาดนี้</p>
			<p class="text-xl"><b>เพิ่มเลย!</b></p>
		</div>
	{:else}
		<div class="w-[750px] flex flex-col gap-3">
			{#each renderQueue as queue, i}
				{#if i == 0}
					<Active
						queue_data={{
							order: i + 1,
							displayName: queue.displayName,
							startDate: formatTime(queue.startDate),
							endDate: formatTime(queue.endDate)
						}} />
				{/if}
			{/each}

			{#if renderQueue.length > 1}
				<Table queue={renderQueue} />
			{/if}
		</div>
	{/if}
</div>
