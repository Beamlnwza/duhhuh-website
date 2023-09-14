<script lang="ts">
	import * as Table from '$lib/components/ui/table'
	import * as Card from '$lib/components/ui/card'

	export let queue: any
</script>

{#if queue.length > 0}
	<Card.Root>
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">คิวที่</Table.Head>
					<Table.Head>อีกประมาณ</Table.Head>
					<Table.Head class="text-right">ชื่อ</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each queue as queue, i}
					{#if i != 0}
						<Table.Row>
							<Table.Cell class="font-medium">{i + 1}</Table.Cell>
							<Table.Cell>{i * 1} นาที</Table.Cell>
							<Table.Cell class="text-right">{queue.displayName}</Table.Cell>
						</Table.Row>
					{/if}
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Root>
{/if}
