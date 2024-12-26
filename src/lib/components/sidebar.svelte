<script lang="ts">
	import {DashboardIcon,Union,Payout,Settlements,Contact,Disbuts,Team,Bank,FlipopayLogo,Arrow} from '$lib/assets/icons/index.js';

	let menuItems = [
		{ name: 'Dashboard', href: '#', src: DashboardIcon },
		{ name: 'Check balance', href: '#', src: Union },
		{ name: 'Payout', href: '#', src: Payout },
		{ name: 'Report', href: '#', src: Settlements },
		{ name: 'Contact', href: '#', src: Contact },
		{ name: 'Disbuts', href: '#', src: Disbuts },
		{ name: 'Team', href: '#', src: Team },
		{ name: 'Bank', href: '#', src: Bank }
	];
	let isOpen = $state(false);
	const toggleHandler = () => {
		isOpen = !isOpen;
	};
</script>

<aside
	class=" flex h-full flex-col gap-[50px] bg-[#2197D4] px-[20px] py-[50px] text-white transition-transform duration-500 ease-in-out {isOpen
		? ''
		: 'w-fit max-w-[84px]'}"
>
      <svelte:component this={FlipopayLogo}/>
	<!-- <img src={FlipopayLogo} alt="FlipopayLogo" class="h-[32px] w-[40px]" /> -->
	<div class="flex -translate-y-10 translate-x-8 transform justify-end">
		<button
			onclick={toggleHandler}
			class="flex h-[32px] w-[32px] items-center justify-center rounded-[30px] bg-white hover:bg-[#2197D4]"
		>
			<span class="transition-transform duration-300 {isOpen ? 'rotate-180' : ''}"
				> <svelte:component this={Arrow}/>   </span
			>
		</button>
	</div>
	<nav class="-translate-y-16 {!isOpen ? 'm-w-[44px] w-fit' : ''} m-h-[464px] h-fit gap-[16px]">
		{#each menuItems as menu}
			<div
				class="flex h-[44px] cursor-pointer items-center gap-2 {!isOpen
					? 'w-[44px]'
					: ''} rounded-[10px] p-[10px] hover:bg-[rgba(255,255,255,0.2)]"
			>
			
			<svelte:component this={menu.src}/> 
				<!-- <img src={menu.src} alt={menu.name} /> -->
				<p class="text-nowrap {!isOpen ? 'hidden' : ''}">{menu.name}</p>
			</div>
		{/each}
	</nav>
</aside>
