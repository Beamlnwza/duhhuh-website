<script lang="ts">
	import * as Select from '$lib/components/ui/select'

	const roles = [
		{ value: 'ADMIN', label: 'Admin' },
		{ value: 'USER', label: 'User' }
	]

	type role = 'ADMIN' | 'USER'

	export let value: role

	console.log(value)

	function disabledItem(value: role, role_value: string) {
		return value === role_value
	}

	function toCapitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
	}
</script>

<Select.Root>
	<Select.Trigger class="w-[180px]">
		<Select.Value placeholder={toCapitalize(value)} />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>Change to</Select.Label>
			{#each roles as role}
				<Select.Item
					disabled={disabledItem(value, role.value)}
					value={role.value}
					label={role.label}>{role.label}</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
</Select.Root>
