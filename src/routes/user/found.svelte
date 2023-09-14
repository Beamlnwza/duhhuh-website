<script lang="ts">
	import { Collection } from 'sveltefire'
</script>

<Collection ref={'queue'} let:count let:data>
	<div class="flex w-full justify-between">
		<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">{count} คิว</h3>
		<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">{count * 1} นาที</h3>
	</div>
</Collection>
