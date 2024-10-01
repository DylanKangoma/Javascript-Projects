// // let taskList = []
// // const taskInput = document.getElementById('task');
// // const addTaskButton = document.getElementById('add-task');
// // const taskListElement = document.getElementById('task-list')

// // addTaskButton.addEventListener('click', addTask);

// // function addTask() {
// //     const task = taskInput.value.trim();
// //     if (task) {
// //         taskList.push(task);
// //         taskInput.value = '';
// //         renderTaskList();
// //     }
// // }
// // function renderTaskList(){
// //     taskListElement.innerHTML = '';
// //     taskList.forEach((task, index) => {
// //         const taskElement = document.createElement('li');
// //         taskElement.textContent = task;
// //         taskListElement.appendChild(taskElement);

// //     });

// // }
// // obj contains a reference to the object we defined on the right side
// const obj = { data: 42 };
// // objCopy will contain a reference to the object referenced by obj
// const objCopy = obj;

// // making changes to objCopy will make changes to the object that it refers to
// objCopy.data = 43;

// console.log(obj); // { data: 43 }
// console.log(objCopy); // { data: 43 }


// const element = document.querySelector("#container");
// element.style.backgroundColor = "red";

// function increaseCounterObject(objectCounter) {
//     objectCounter.counter += 1;
//   }
  
//   function increaseCounterPrimitive(primitiveCounter) {
//     primitiveCounter += 1;
//   }
  
//   const object = { counter: 0 };
//   let primitive = 0;
  
//   increaseCounterObject(object);
//   increaseCounterPrimitive(primitive);
  

function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }
  