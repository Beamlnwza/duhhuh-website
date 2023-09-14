<script lang="ts">
	import Queue from './queue.svelte'
	import * as Card from '$lib/components/ui/card'
	interface Queue {
		order: number
		displayName: string
		startDate: string | undefined
		endDate: string | undefined
	}

	export let queue_data: Queue
</script>

<Card.Root class="">
	<Card.Header>
		<Card.Title>
			<h3 class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				{queue_data.order}
			</h3>
		</Card.Title>
	</Card.Header>
	<Card.Content class="flex w-full flex-col">
		<div class="flex w-full justify-between text-gray-500">
			<h3 class="scroll-m-20 text-xl font-semibold tracking-tight">เริ่มต้น</h3>
			<h3 class="scroll-m-20 text-xl font-semibold tracking-tight">เสร็จประมาณ</h3>
		</div>
		<div class="flex w-full justify-between">
			<h2 class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				{queue_data.startDate}
			</h2>
			<h2 class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				{queue_data.endDate}
			</h2>
		</div>
	</Card.Content>
	<Card.Footer>
		<h4 class="scroll-m-20 text-xl font-semibold tracking-tight text-gray-400">
			{queue_data.displayName}
		</h4>
	</Card.Footer>
</Card.Root>
