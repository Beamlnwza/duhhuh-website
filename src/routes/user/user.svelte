<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte'
	import { SignedIn, SignedOut } from 'sveltefire'
	import { LogOut } from 'lucide-svelte'

	import * as Card from '$lib/components/ui/card'
	import { collectionStore } from 'sveltefire'

	import AddQueue1 from './addQueue1.svelte'
	import { collection, query, where } from 'firebase/firestore'

	import { auth, firestore } from '$lib/firebase'
	import { onAuthStateChanged } from 'firebase/auth'

	import RemoveQueueCard from './removeQueueCard.svelte'

	import socket from '$lib/webSocketConnection'
	import Found from './found.svelte'
	import Active from './active.svelte'
	import Pending from './pending.svelte'

	let haveQueue = false

	let userId = ''

	onAuthStateChanged(auth, (user) => {
		if (user) {
			const queueRef = collection(firestore, 'queue')
			const q = query(queueRef, where('userId', '==', user.uid))
			const query_data = collectionStore(firestore, q)

			query_data.subscribe((data) => {
				if (data.length > 0) {
					haveQueue = true
				} else {
					haveQueue = false
				}
			})

			userId = user.uid
		}
	})

	interface Notify {
		userId: string
		message: any
	}

	socket.on('notify', (message) => {
		const data = message as Notify
		if (data.userId === auth.currentUser?.uid) {
			console.log(message)
		}
	})

	socket.on('nearby', (message) => {
		const data = message as Notify
		if (data.userId === auth.currentUser?.uid) {
			notifyMessage = 'คิวของคุณใกล้ถึงแล้ว'
		}
		setTimeout(() => {
			notifyMessage = ''
		}, 5000)
	})

	socket.on('done', (message) => {
		const data = message as Notify
		if (data.userId === auth.currentUser?.uid) {
			notifyMessage = 'ถึงคิวแล้ว'
		}
	})

	let notifyMessage = ''
</script>

<SignedIn let:user let:signOut>
	<div
		class="w-full h-screen flex justify-center items-center bg_typo max-lg:h-full max-lg:bg-none">
		<Card.Root class="w-full mx-10 p-4">
			<Card.Header>
				<Card.Title class="flex justify-between">
					<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
						ยินดีต้อนรับ {user.displayName}!
					</h3>
				</Card.Title>
				<Card.Description class="flex flex-row gap-2 justify-end items-center">
					<Button variant="secondary" on:click={signOut} class="w-fit"><LogOut size={20} /></Button>
				</Card.Description>
			</Card.Header>
			<Card.Content>
				{#if haveQueue}
					<div class="flex flex-col gap-2">
						<h4 class="scroll-m-20 text-xl font-semibold tracking-tight">เจอคิวในระบบ!</h4>
						<Active />
						<Card.Root class="w-full p-4"
							><Card.Title>
								<div class="flex justify-between">
									<p class="leading-7 text-gray-600">คิวที่</p>
									<p class="leading-7 text-gray-600">จะถึงในอีกประมาณ</p>
								</div>
								<div class="flex justify-between"><Pending userId={user.uid} /></div>
							</Card.Title></Card.Root>
					</div>
				{:else}
					<Card.Root class="w-full p-4">
						<h4 class="scroll-m-20 text-xl font-semibold tracking-tight">ไม่เจอคิวในระบบ</h4>
						<p class="leading-7 text-gray-600 pb-2">ถ้าคิวหายให้ติดต่อผู้ดูแลระบบ</p>
						<Card.Title>
							<div class="flex justify-between">
								<p class="leading-7 text-gray-600">คิวตอนนี้</p>
								<p class="leading-7 text-gray-600">รอประมาณ</p>
							</div>
							<div class="flex justify-between">
								<Found />
							</div>
						</Card.Title></Card.Root>
				{/if}
			</Card.Content>
			<Card.Footer
				><div class="flex flex-row gap-2 justify-end w-full">
					{#if haveQueue}
						<RemoveQueueCard />
					{:else}
						<AddQueue1 userId={user.uid} displayName={user.displayName} />
					{/if}
				</div></Card.Footer>
		</Card.Root>
	</div>
</SignedIn>

<SignedOut>
	<div class="flex w-full h-screen items-center justify-center flex-col gap-2 bg_typo">
		<Card.Root>
			<Card.Header>
				<div>เข้าสู่ระบบเพื่อใช้งาน!</div>
			</Card.Header>
			<Card.Content>
				<Button
					on:click={() => {
						window.location.href = '/login'
					}}>คลิกเพื่อเข้าสู่ระบบ</Button>
			</Card.Content>
		</Card.Root>
	</div>
</SignedOut>
