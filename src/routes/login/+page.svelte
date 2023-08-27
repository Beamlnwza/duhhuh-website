<script lang="ts">
	import { googleAuthProvider } from '$lib/firebase';
	import { signInWithPopup } from 'firebase/auth';
	import { getFirebaseContext } from 'sveltefire';

	const { auth } = getFirebaseContext();

	async function login() {
		// make sure auth is not undefined
		if (!auth) {
			throw new Error('Something went wrong try to refresh the page');
		}

		await signInWithPopup(auth, googleAuthProvider);
	}
</script>

<button on:click={login}> Login with Google </button>
