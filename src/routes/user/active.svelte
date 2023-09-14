<script>
	import { collectionStore } from 'sveltefire'
	import { firestore } from '$lib/firebase'
	import { collection, where, query } from 'firebase/firestore'
	import { userStore } from 'sveltefire'
	import { auth } from '$lib/firebase'

	const collectionRef = collection(firestore, 'queue')
	const q = query(collectionRef, where('status', '==', 'ACTIVE'))

	const query_data = collectionStore(firestore, q)

	const user = userStore(auth)
</script>

{#each $query_data as item}
	{#if item.userId === $user?.uid}
		<div>คิวของคุณกำลังทำงาน</div>
	{/if}
{/each}
