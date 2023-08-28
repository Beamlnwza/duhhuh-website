<script context="module" lang="ts">
	export type role = 'ADMIN' | 'USER';

	export type User = {
		id: string;
		displayName: string;
		email: string;
		role: role;
	};
</script>

<script lang="ts">
	import { createTable, Render, Subscribe, createRender } from 'svelte-headless-table';
	import { addTableFilter } from 'svelte-headless-table/plugins';

	import { readable } from 'svelte/store';
	import * as Table from '$lib/components/ui/table';
	import UserAction from './user-action.svelte';

	import { Input } from '$lib/components/ui/input';

	const userData: User[] = [
		{
			id: '1',
			displayName: 'John Doe',
			email: 'JohnDoe@email.com',
			role: 'ADMIN'
		},
		// create more mock data here
		// more 10
		{
			id: '2',
			displayName: 'John Doe',
			email: 'JohnDoe2@email.com',
			role: 'USER'
		}
	];

	const table = createTable(readable(userData), {
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLowerCase())
		})
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'id',
			header: 'ID'
		}),
		table.column({
			accessor: 'displayName',
			header: 'Display Name'
		}),
		table.column({
			accessor: 'role',
			header: 'Role',
			cell: (item) => {
				return createRender(UserAction, { value: item.value });
			}
		}),
		table.column({
			accessor: ({ email }) => email,
			header: 'Email'
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(columns);
	const { filterValue } = pluginStates.filter;
</script>

<div class="flex items-center py-4">
	<Input
		class="max-w-sm"
		placeholder="ค้นหาโดยใช้ ID, Display Name, Role และ Email"
		type="text"
		bind:value={$filterValue} />
</div>
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
