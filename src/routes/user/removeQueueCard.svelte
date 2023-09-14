<script>
	import * as Dialog from '$lib/components/ui/dialog'
	import { Button, buttonVariants } from '$lib/components/ui/button'

	import RemoveQueue from './removeQueue.svelte'

	let disabled = false
</script>

<Dialog.Root>
	<Dialog.Trigger
		class={buttonVariants({ variant: 'destructive' })}
		{disabled}
		on:click={() => (disabled = true)}>ลบคิวในตอนนี้</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>
				<h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
					อ่านก่อน เพิ่มคิวใหม่!
				</h4></Dialog.Title>
		</Dialog.Header>
		<div class="grid gap-4">
			<ul class=" ml-6 list-disc [&>li]:mt-2">
				<li class="text-xl text-red-600">คิวหาย แค่นั้นแหละ</li>
			</ul>
		</div>
		<Dialog.Footer>
			<RemoveQueue />
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
