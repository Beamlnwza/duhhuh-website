<script lang="ts">
	import { getFirebaseContext } from 'sveltefire'
	import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
	const { auth } = getFirebaseContext()
	import { LogIn } from 'lucide-svelte'

	import { Button } from '$lib/components/ui/button'
	import * as Card from '$lib/components/ui/card'

	import '../../css/bg.css'

	const provider = new GoogleAuthProvider()

	function Login() {
		if (!auth) {
			return
		}

		signInWithPopup(auth, provider)
	}

	//@ts-ignore
	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log(user)
			window.location.href = '/'
		}
	})
</script>

<div class="grid max-lg:grid-cols-1 max-2xl:grid-cols-2 2xl:grid-cols-2">
	<div class="w-full h-screen grid content-center bg_domino max-lg:hidden" />
	<div class="w-full h-screen flex justify-center items-center">
		<Card.Root class="w-full 2xl:mx-40 max-2xl:mx-20 max-xl:mx-10">
			<Card.Header>
				<Card.Title>เข้าสู่ระบบ</Card.Title>
			</Card.Header>
			<Card.Content class="flex flex-col">
				<li class="inline-block">
					<b class="text-red-700">ใช้อีเมลโรงเรียนเท่านั้น</b>
				</li>
			</Card.Content>
			<Card.Footer class="flex w-full flex-col gap-2">
				<Button
					on:click={Login}
					class="flex w-full justify-center items-center gap-2"
					variant="outline">
					<LogIn />
					<p class="leading-7">Login with Google</p>
				</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</div>
