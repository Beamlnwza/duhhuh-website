<script>
	import * as Card from '$lib/components/ui/card'

	import QueueTable from './queue-table.svelte'
</script>

<Card.Root class="w-full">
	<Card.Header>
		<Card.Title class="text-xl font-semibold">
			<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">แก้ไขคิว</h3>
		</Card.Title>
		<Card.Description class="flex justify-between leading-7 text-xs">
			<p class="text-xl">ลบคิว, เพิ่มคิว และ อื่นๆ สำหรับ คิว ที่กำลัง Active อยู่</p>
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<p class="leading-7">ตาราง คิวที่กำลัง Active</p>
		<QueueTable />
	</Card.Content>
</Card.Root>
