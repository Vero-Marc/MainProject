export const load = async () => {
    let transactionList;
    try {
      const response = await fetch('http://localhost:5173/api/transactions');
      transactionList = await response.json();
  
    } catch (error) {
      console.log(error);
  
    }
    return {
      transactionList
    }
  }