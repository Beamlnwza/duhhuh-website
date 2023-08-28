<script context="module" lang="ts">
	export type Queue = {
		id: string;
		userId: string;
		createdAt: Date;
		endAt: Date;
		status: status;
	};

	export type status = 'waiting' | 'active' | 'completed';
</script>

<script lang="ts">
	import { createRender, createTable, Render, Subscribe } from 'svelte-headless-table';
	import { readable } from 'svelte/store';
	import * as Table from '$lib/components/ui/table';

	import QueueActions from './queue-actions.svelte';

	const queues: Queue[] = [
		{
			id: '1',
			userId: '1',
			createdAt: new Date(),
			endAt: new Date(),
			status: 'active'
		},
		{
			id: '2',
			userId: '2',
			createdAt: new Date(),
			endAt: new Date(),
			status: 'waiting'
		},
		{
			id: '3',
			userId: '3',
			createdAt: new Date(),
			endAt: new Date(),
			status: 'waiting'
		}
	];

	const table = createTable(readable(queues));

	const columns = table.createColumns([
		table.column({
			accessor: 'id',
			header: 'ID'
		}),
		table.column({
			accessor: 'userId',
			header: 'user id'
		}),
		table.column({
			accessor: 'createdAt',
			header: 'create at'
		}),
		table.column({
			accessor: 'endAt',
			header: 'end at'
		}),
		table.column({
			accessor: 'status',
			header: 'status',
			cell: (item) => {
				return createRender(QueueActions, { queueData: item.value });
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns);
</script>

<div class="rounded-md border">
	<Table.Root {...$tableAttrs}>
		<Table.Header>
			{#each $headerRows as headerRow}
				<Subscribe rowAttrs={headerRow.attrs()}>
					<Table.Row>
						{#each headerRow.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
								<Table.Head {...attrs}>
									<Render of={cell.render()} />
								</Table.Head>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Header>
		<Table.Body {...$tableBodyAttrs}>
			{#each $pageRows as row (row.id)}
				<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
					<Table.Row {...rowAttrs}>
						{#each row.cells as cell (cell.id)}
							<Subscribe attrs={cell.attrs()} let:attrs>
								<Table.Cell {...attrs}>
									<Render of={cell.render()} />
								</Table.Cell>
							</Subscribe>
						{/each}
					</Table.Row>
				</Subscribe>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
