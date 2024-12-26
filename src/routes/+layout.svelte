<script>
	
	import Navbar from '$lib/components/navbar.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="relative flex overflow-x-hidden">
	<Sidebar />
	<div class="flex flex-1 flex-col w-[90%] bg-gray-50">
		<Navbar />
		<main>
			{@render children()}
		</main>
	</div>
</div>
