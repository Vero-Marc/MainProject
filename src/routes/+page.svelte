<script lang="ts">
	import {TotalBalance,SuccessfulTransaction,AmountRefund,ChargebackAmount,Download,Filter,TimePicker,TablePayIn,TablePayout} from '$lib/assets/icons/index.js';
    let {data} = $props()
	let transactionList = data.transactionList
	let cardItems = [
		{
			name: 'Total Balance',
			text: '₹56,27,850.00',
			textColor: '#38B4B2',
			cardColor: '#E7F7F9',
			src: TotalBalance
		},
		{
			name: 'Successful transaction',
			text: '1412 transactions',
			textColor: '#2091C5',
			src: SuccessfulTransaction
		},
		{ name: 'Amount Refunded', text: '₹1000', textColor: '#DB327F', src: AmountRefund },
		{ name: 'Chargeback amount', text: '₹200', textColor: '#F3BE02', src: ChargebackAmount }
	];

	let tableColumn = [
		{ columnName: 'Date' },
		{ columnName: 'OrderId' },
		{ columnName: 'Amount in INR' },
		{ columnName: 'Customer Name' },
		{ columnName: 'Auth Code' },
		{ columnName: 'Transaction type' },
		{ columnName: 'UTR if success' },
		{ columnName: 'Account Number' },
	];

	let tableRows = [
		{
			Date: '17/12/2024',
			OrderId: '969FGBQ6',
			Amount: 1000,
			Customer_Name: 'Customer',
			Auth_Code: 87654,
			Transaction_type: 'UPI',
			UTR: 'Yes',
			Acc_No: 12345678,
			PaymentType: 'PayOut'
		},
		{
			Date: '17/12/2024',
			OrderId: '969FGBQ6',
			Amount: 1000,
			Customer_Name: 'Customer',
			Auth_Code: 87654,
			Transaction_type: 'UPI',
			UTR: 'Yes',
			Acc_No: 12345678,
			PaymentType: 'PayIn'
		}
	];

	let activetab = $state('All Transactions');
	let tabs = ['All Transactions', 'Successful Transactions', 'Amount refunded'];
	let walletId = $state('X96WWFGB86');
	let dateRange = $state('All time');
	let showDatePicker = $state(false);
	const datePicker = () => {
		showDatePicker = !showDatePicker;
	};
    


	
</script>

<div class=" top-[88px] h-fit max-h-[810px]  gap-[24px] p-[24px]">
	<div class="mb-6 flex h-fit max-h-[40px] w-full gap-[10px]">
		<div class="flex h-fit max-h-[40px] w-fit  items-center gap-[10px]">
			<p class="h-[18px] w-[58px] text-nowrap text-center text-sm text-[#666E80]">Wallet ID</p>
			<div
				class="flex h-[40px] w-full  items-center gap-[10px] rounded-[4px] bg-white p-[12px]"
			>
				{walletId}
			</div>
		</div>
		<div class="flex h-fit max-h-[40px] w-full items-center gap-[12px]">
		<p class="h-[18px] w-fit  text-nowrap text-start text-sm text-[#666E80]">
				Select Date Range
			</p>
			<div
				class="flex h-[40px] w-[120px] items-center justify-between rounded-[4px] bg-white p-[12px]"
			>
				<span>{dateRange}</span>
				<button onclick={() => datePicker()}>
			<svelte:component this={TimePicker}/> 
					
					{#if showDatePicker}
						<div class=" relative  top-12 z-10 rounded-md border bg-white p-4 shadow-lg">
							<p class="cursor-pointer hover:text-blue-500">Today</p>
							<p class="cursor-pointer hover:text-blue-500">Last 7 Days</p>
							<p class="cursor-pointer hover:text-blue-500">Last Month</p>
							<p class="cursor-pointer hover:text-blue-500">All Time</p>
						</div>
					{/if}
				</button>
			</div>
		</div>
	</div>
	<div class=" grid h-fit  w-full  grid-cols-4 gap-[12px]">
		{#each cardItems as card, index}
			<div
				style="color-scheme: #E7F7F9;"
				class="flex h-full w-full  gap-[12px] rounded-[10px] px-[24px] py-[16px] shadow"
			>
			<svelte:component this={card.src}/> 
				<div>
					<h2 class="text-md text-[#122337]">{card.name}</h2>
					<h2 style=" color:{card.textColor}">{card.text}</h2>
				</div>
			</div>
		{/each}
	</div>
	<div
		class=" top-[204px] mt-4 h-fit gap-[24px] rounded-[10px] bg-white p-[24px]"
	>
		<div class="h-fit max-h-[76px]   gap-[16px]">
			<div class="h-fit max-h-[20px]  ">
				<h1 class="font-semibold">Recent transcation</h1>
			</div>

			<div class="my-4 flex h-fit max-h-[40px]   items-center justify-between">
				<div class="flex gap-[8px]">
					{#each tabs as tab}
						<div class="py-3">
							<button
								class="w-fit gap-[8px] rounded-sm border-b-[0.5px] px-[16px] py-2 text-sm font-medium {activetab ===
								tab
									? 'border-b-[2px] border-[#2197D4] text-[#2197D4]'
									: 'border-b-[0.5px]'}"
								onclick={() => (activetab = tab)}
							>
								{tab}
							</button>
						</div>
					{/each}
				</div>

				<div class="flex h-fit max-h-[36px]  gap-[8px] space-x-2">
					<button
						class="text-md flex h-fit max-h-[36px]  items-center gap-[8px] rounded-[4px] border-[1px] border-[#2197D4] bg-white px-[20px] py-[8px] text-[#2197D4]"
						>Export
						<span class="h-[20px] w-[20px] pt-1">
							<svelte:component this={Download}/> </span>
					</button>
					<button
						class="flex h-fit max-h-[36px] w-fit items-center gap-[8px] rounded-[4px] border-[1px] border-[#2197D4] bg-[#2197D4] px-[16px] py-[8px] text-sm text-white"
						>Advanced Filters
						<span class=" h-[20px] w-[20px] pt-1">
							<svelte:component this={Filter}/> 
							
						</span>
					</button>
				</div>
			</div>
		</div>
		<div class="overflow-x-auto">
			<table 
				class=" h-fit text-sm w-full"
			>
				<thead class="h-48px bg-[#F6F9FB] whitespace-nowrap">
					<tr>
						{#each tableColumn as columns, index}
							<th class=" border-b-[1px] px-[12px] py-[14px] text-left">{columns.columnName}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
                    
					{#each transactionList as values, index}
						<tr class=" gap-[6px] border-b-[0.4px] hover:bg-gray-50">
							<td class="px-[12px] py-[20px]"
								><div class="flex gap-2">
									<svelte:component this={values.PaymentType === 'PayIn' ? TablePayIn : TablePayout}/> 
									{values.Date}
								</div></td
							>
							<td class="px-[12px] py-[20px]">{values.OrderId}</td>
							<td
								style=" color:{values.PaymentType === 'PayIn' ? '#04AA61' : '#FD665C'} "
								class="px-[12px] py-[20px]"
								>{values.PaymentType === 'PayIn' ? '+' : '-'} ₹ {values.Amount}</td
							>
							<td class="px-[12px] py-[20px]">{values.Customer_Name}</td>
							<td class="px-[12px] py-[20px]">{values.Auth_Code}</td>
							<td class="px-[12px] py-[20px]">{values.Transaction_type}</td>
							<td class="px-[12px] py-[20px]">{values.UTR}</td>
							<td class="px-[12px] py-[20px]">{values.Acc_No}</td>
						</tr>
					{/each}
				</tbody>
			</table>
			
		</div>
	</div>
</div>


<style>
 ::-webkit-scrollbar {
  width: 4px;
  background-color: gray;
  overflow-x: auto;
  border-radius: 10px;
  height: 8px;

}

::-webkit-scrollbar-thumb {
  background: #2197D4;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #64f112;
}
</style> 

