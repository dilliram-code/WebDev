// In programming, a promise is a concept used to handle asynchronous operations. It represents a value that might be available now, or in the future, or never. Promises provide a way to write asynchronous code in a more readable and manageable manner.

//An analogy often used to explain promises is that of a restaurant ordering system. Imagine you go to a restaurant and place an order. The waiter gives you a promise (represented by a receipt) that your food will be delivered when it's ready. In the meantime, you are free to do other things like chat with friends or read a menu. When the food is ready, the promise is fulfilled, and you receive your order.

//We create a new promise (myPromise) that represents an asynchronous operation (simulated by setTimeout).

//The promise has two possible outcomes: it can either be resolved (fulfilled) with a result or rejected with an error.

//We use the .then() method to handle the resolved case, where the asynchronous operation was successful.

//We use the .catch() method to handle the rejected case, where an error occurred during the asynchronous operation.



// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data from an API
    setTimeout(() => {
      const success = true; // Simulating a successful operation
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
  
  // Handling the Promise
  myPromise
    .then((result) => {
      console.log(result); // Output: Data fetched successfully
    })
    .catch((error) => {
      console.error(error); // Output: Error fetching data
    });
  