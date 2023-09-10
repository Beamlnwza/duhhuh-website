<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui'

	type $$Props = SelectPrimitive.Props

	export let selected: $$Props['selected'] = undefined
	export let open: $$Props['open'] = undefined

	// how to get the value of the selected item?
</script>

<SelectPrimitive.Root bind:selected bind:open {...$$restProps}>
	<slot />
</SelectPrimitive.Root>
