<script lang="ts">
	import Textbox from "$lib/components/textbox.svelte";
	import Select from '$lib/components/selectfield.svelte'
	let adddata = {
		id: 4,
		Date: '',
		OrderId: '969FGBQ6',
		Amount: '1000',
		Customer_Name: '',
		Auth_Code: '87654',
		Transaction_type: 'UPI',
		UTR: 'Yes',
		Acc_No: '',
		PaymentType: 'PayIn'
	};

	const addTransaction = async (event: Event) => {
		event.preventDefault();
		const res = await fetch('/api/transactions', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(adddata)
		});
		const result = await res.json();
	};

	// get req in svelte
	//  onMount(async()=>{
	// 	const response = await fetch('http://localhost:3003/Test/Transactions');
	// 	const data = await response.json()
	// 	console.log(data);
	//  })
</script>

<form class="mx-auto max-w-lg rounded bg-white p-4 shadow-md" onsubmit={addTransaction}>
	<div class="mb-4">
		<label for="date" class="block text-sm font-medium text-gray-700">Date</label>
		<input
			id="date"
			name="Date"
			type="date"
			bind:value={adddata.Date}
			class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
		/>
	</div>
	<div class="mb-4">
		<label for="OID" class="block text-sm font-medium text-gray-700">Order ID</label>
		<input
			id="OID"
			name="OrderId"
			type="text"
			bind:value={adddata.OrderId}
			class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
		/>
  <Textbox name="OrderId" placeholder="Order"/>
  <Select />
	</div>
	<div class="mb-4">
		<label for="amt" class="block text-sm font-medium text-gray-700">Amount</label>
		<input
			id="amt"
			name="Amount"
			type="number"
			bind:value={adddata.Amount}
			class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
		/>
	</div>
	<div class="mb-4">
		<label for="name" class="block text-sm font-medium text-gray-700">Customer Name</label>
		<input
			id="name"
			name="Customer_Name"
			type="text"
			bind:value={adddata.Customer_Name}
			class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
		/>
	</div>
	<div class="mb-4">
		<label for="AuthCode" class="block text-sm font-medium text-gray-700">Auth Code</label>
		<input
			id="AuthCode"
			name="Auth_Code"
			type="text"
			bind:value={adddata.Auth_Code}
			class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
		/>
	</div>
	<div class="mb-4">
		<label for="Ttype" class="block text-sm font-medium text-gray-700">Transaction Type</label>
		<input
			id="Ttype"
			name="Transaction_type"
			type="text"
			bind:value={adddata.Transaction_type}
			class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
		/>
	</div>

	<div class="mb-4">
		<label for="AccNo" class="block text-sm font-medium text-gray-700">Account Number</label>
		<input
			id="AccNo"
			name="Acc_No"
			type="text"
			bind:value={adddata.Acc_No}
			class="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
		/>
	</div>

	<button
		type="submit"
		class="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
	>
		Submit
	</button>
</form>
