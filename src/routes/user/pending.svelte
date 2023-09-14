<script lang="ts">
	import { collectionStore } from 'sveltefire'
	import { firestore } from '$lib/firebase'
	import { collection, where, query, orderBy } from 'firebase/firestore'

	import { Collection } from 'sveltefire'

	export let userId = ''

	const queueRef = collection(firestore, 'queue')
	const q = query(queueRef, orderBy('assignDate', 'asc'))

	const query_data = collectionStore(firestore, q)

	$: userIndex = $query_data.findIndex((data) => data.userId === userId)
	$: console.log(userIndex)
</script>

<div class="flex w-full justify-between">
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">{userIndex + 1}</h3>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">{(userIndex + 1) * 1} นาที</h3>
</div>
