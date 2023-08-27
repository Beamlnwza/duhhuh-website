<script lang="ts">
	import { getFirebaseContext } from 'sveltefire';
	import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
	const { auth } = getFirebaseContext();

	import '../../css/bg.css';

	import { Button } from '$lib/components/ui/button';

	const provider = new GoogleAuthProvider();

	let error = '';

	function Login() {
		if (!auth) {
			return;
		}

		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {});
	}

	//@ts-ignore
	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log(user);
			window.location.href = '/';
		}
	});
</script>

<div class="w-full h-screen grid content-center bg_typo">
	<div class="flex justify-center flex-col items-center gap-5">
		{#if error}
			<p class="text-red-500">{error}</p>
		{/if}

		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
			ใข้อีเมล์โรงเรียนเท่านั้น
		</h1>

		<Button on:click={Login}>Login with Google</Button>
	</div>
</div>
