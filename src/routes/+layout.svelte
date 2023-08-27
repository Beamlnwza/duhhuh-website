<script lang="ts">
	import { FirebaseApp } from 'sveltefire';
	import { firestore, auth } from '$lib/firebase';

	import '../app.css';
</script>

<FirebaseApp {auth} {firestore}>
	<slot />
</FirebaseApp>
