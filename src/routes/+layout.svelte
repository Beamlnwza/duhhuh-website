<script lang="ts">
	import { FirebaseApp } from 'sveltefire'
	import { firestore, auth, storage } from '$lib/firebase'
	import TailwindIndicator from '$lib/tailwind-indicator.svelte'

	import '../app.css'

	let isDev = false

	if (process.env.NODE_ENV === 'development') {
		isDev = true
	}
</script>

<FirebaseApp {auth} {firestore} {storage}>
	{#if isDev}
		<TailwindIndicator />
		<slot class="absolute z-0" />
	{:else}
		<slot class="absolute z-0" />
	{/if}
</FirebaseApp>
