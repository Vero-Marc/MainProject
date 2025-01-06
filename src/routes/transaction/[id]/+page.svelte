<script lang="ts">
	import { onMount } from 'svelte';
	import {page} from '$app/stores';
	let name = $state('');
	let {data} = $props()
    
	let adddata = data.transactionList
	let id = data.transactionList.id

	const updateTransaction = async (event: Event) => {
		event.preventDefault();
		console.log(adddata);
		
		const res = await fetch(`/api/transactions/${id}`, {
			method: 'PUT',
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

  <form class="max-w-lg mx-auto bg-white p-4 shadow-md rounded" onsubmit={updateTransaction}>
	<div class="mb-4">
	  <label for ="date" class="block text-sm font-medium text-gray-700">Date</label>
	  <input id="date" name="Date"
		type="date"
		bind:value={adddata.Date}
		class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
	  />
	</div>
	<div class="mb-4">
	  <label for="OID" class="block text-sm font-medium text-gray-700">Order ID</label>
	  <input id="OID" name="OrderId"
		type="text"
		bind:value={adddata.OrderId}
		class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
	  />
	</div>
	<div class="mb-4">
	  <label for="amt" class="block text-sm font-medium text-gray-700">Amount</label>
	  <input id="amt" name="Amount"
		type="number"
		bind:value={adddata.Amount}
		class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
	  />
	</div>
	<div class="mb-4">
	  <label for="name" class="block text-sm font-medium text-gray-700">Customer Name</label>
	  <input id="name" name="Customer_Name"
		type="text"
		bind:value={adddata.Customer_Name}
		class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
	  />
	</div>
	<div class="mb-4">
	  <label for="AuthCode" class="block text-sm font-medium text-gray-700">Auth Code</label>
	  <input id="AuthCode" name="Auth_Code"
		type="text"
		bind:value={adddata.Auth_Code}
		class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
	  />
	</div>
	<div class="mb-4">
	  <label for="Ttype" class="block text-sm font-medium text-gray-700">Transaction Type</label>
	  <input id="Ttype" name="Transaction_type"
		type="text"
		bind:value={adddata.Transaction_type}
		class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
	  />
	</div>
	
	<div class="mb-4">
	  <label for="AccNo" class="block text-sm font-medium text-gray-700">Account Number</label>
	  <input id="AccNo" name="Acc_No"
		type="text"
		bind:value={adddata.Acc_No}
		class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
	  />
	</div>
	
	<button
	  type="submit"
	  class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
	>
	  Submit
	</button>
  </form>
