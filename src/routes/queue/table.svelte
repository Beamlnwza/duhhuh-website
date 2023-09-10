<script lang="ts">
	interface Queue {
		queueOrder: number
		displayName: string
		time: string
		status: string
	}

	export let queue: Queue

	console.log(queue)
</script>

<div>{queue.displayName}</div>
<div>{queue.queueOrder}</div>
<div>{queue.time}</div>
<div>{queue.status}</div>
