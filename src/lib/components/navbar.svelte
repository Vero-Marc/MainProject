<script lang="ts">

	import {Notification,Settings} from '$lib/assets/icons/index.js';

	let navList = [
		{ name: 'notification', href: '#', src: Notification },
		{ name: 'settings', href: '#', src: Settings }
	];
</script>

<header class="sticky top-0 z-10">
	<nav
		class=" flex h-fit max-h-[88px] items-center justify-between bg-white px-[32px] py-[24px]"
	>
		<h2 class="text-lg font-bold">Check balance</h2>
		<div class=" relative w-full max-w-md">
			<div
				class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-blue-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-5 w-5 text-[#2197D4]"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z"
					/>
				</svg>
			</div>
			<!-- Input Field -->
			<input
				type="text"
				placeholder="search everything"
				class="h-[40px] w-[400px] gap-[6px] rounded-[4px] bg-[#F6F9FB] px-[12px] py-[8px] pl-10 pr-4"
			/>
		</div>

		<div class="flex items-center gap-[16px]">
			{#each navList as navitems}
				<a href="#top">
					<svelte:component this={navitems.src}/>
					<!-- <img src={navitems.src} alt={navitems.name} class="rounder-[7px] gap-[10px] p-[4px]" /> -->
				</a>
			{/each}
			<button class="h-[40px] w-[40px] rounded-[40px] hover:bg-gray-200">
				<img
					src="https://imgs.search.brave.com/-BzzlJEua6NyQZ30Ax0NVQgHNBhNaEdMpudfUs5ZbMo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS9j/MmZkMmY5NGFhNTU1/NDQzMjdmYzhlZDg5/MDFhZWRiMmVlYzhl/MzUzNTI0MzQ1MmI0/MzY0NmViODA4NmVm/ZTFhLzY4NzQ3NDcw/NzMzYTJmMmY3OTYx/NzY3NTdhNjM2NTZj/Njk2YjY1NzIyZTY3/Njk3NDY4NzU2MjJl/Njk2ZjJmNzM2MTZk/NzA2YzY1MmQ2OTZk/NjE2NzY1NzMyZjY5/NmQ2MTY3NjUyZDM0/MzQyZTZhNzA2Nw.jpeg"
					alt="User Avatar"
					class="h-[40px] w-[40px] rounded-[40px]"
				/></button
			>
		</div>
	</nav>
</header>
