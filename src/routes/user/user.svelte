<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { SignedIn, SignedOut } from 'sveltefire';
	import { BellPlus, LogOut } from 'lucide-svelte';

	import * as Card from '$lib/components/ui/card';

	let haveQueue = true;

	import AddQueue2 from './addQueue2.svelte';
</script>

<SignedIn let:user let:signOut>
	<div class="w-full h-screen flex justify-center items-center bg_typo">
		<Card.Root class="w-full mx-10 p-4">
			<Card.Header>
				<Card.Title class="flex justify-between">
					<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
						ยินดีต้อนรับ {user.displayName}!
					</h3>
				</Card.Title>
				<Card.Description class="flex flex-row gap-2 justify-between items-center"
					><div class="flex flex-row gap-2">
						<p class="leading-7 text-lg hover:underline hover:cursor-pointer">คู่มือการใช้งาน</p>
						<p class="leading-7 text-lg hover:underline hover:cursor-pointer">ข้อตกลง</p>
					</div>
					<Button variant="secondary" on:click={signOut} class="w-fit"><LogOut size={20} /></Button>
				</Card.Description>
			</Card.Header>
			<Card.Content>
				{#if haveQueue}
					<div class="flex flex-col gap-2">
						<h4 class="scroll-m-20 text-xl font-semibold tracking-tight">เจอคิวในระบบ!</h4>
						<Card.Root class="w-full p-4"
							><Card.Title>
								<div class="flex justify-between">
									<p class="leading-7 text-gray-600">คิวที่</p>
									<p class="leading-7 text-gray-600">จะถึงในอีกประมาณ</p>
								</div>
								<div class="flex justify-between">
									<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">15 คิว</h3>
									<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">20 นาที</h3>
								</div>
							</Card.Title></Card.Root>
					</div>
				{:else}
					<Card.Root class="w-full p-4"
						><Card.Title>
							<div class="flex justify-between">
								<p class="leading-7 text-gray-600">เหลืออีก</p>
								<p class="leading-7 text-gray-600">รอประมาณ</p>
							</div>
							<div class="flex justify-between">
								<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">15 คิว</h3>
								<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">20 นาที</h3>
							</div>
						</Card.Title></Card.Root>
				{/if}
			</Card.Content>
			<Card.Footer
				><div class="flex flex-row gap-2 justify-end w-full">
					{#if haveQueue}
						<Button variant="destructive">ยกเลิกคิว</Button>
						<AddQueue2 />
					{:else}
						<Button variant="default" class="flex justify-center items-center gap-2">
							<BellPlus size={20} />เพิ่มคิวใหม่</Button>
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
						window.location.href = '/login';
					}}>คลิกเพื่อเข้าสู่ระบบ</Button>
			</Card.Content>
		</Card.Root>
	</div>
</SignedOut>
