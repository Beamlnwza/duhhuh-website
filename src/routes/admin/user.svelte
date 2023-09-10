<script>
	import * as Card from '$lib/components/ui/card'

	import UserTable from './user-table.svelte'
</script>

<Card.Root class="w-full mx-10">
	<Card.Header>
		<Card.Title class="text-xl font-semibold">
			<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">แก้ User</h3>
		</Card.Title>
		<Card.Description class="flex justify-between leading-7 text-xs">
			<p class="text-xl">แก้ไข Role และอื่นๆ</p>
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<p class="leading-7">ตาราง <b>User</b></p>
		<UserTable />
	</Card.Content>
</Card.Root>
