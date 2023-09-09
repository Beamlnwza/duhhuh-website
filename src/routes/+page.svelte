<script>
	import User from './user/user.svelte';
	import Queue from './queue/queue.svelte';
	import '../css/bg.css';
</script>

<div class="grid grid-cols-[2fr_1fr] max-lg:grid-cols-1">
	<div><Queue /></div>
	<div><User /></div>
</div>
