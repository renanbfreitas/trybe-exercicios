let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday'; 
      getDaysList.appendChild(dayItem); 
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday'; 
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday'; 
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}

    createDaysOfTheMonth();

    function createHolidayButton(buttonName) {
        let buttonContainer = document.querySelector('.buttons-container');
        let newButton = document.createElement('button');
        let newButtonID = 'btn-holiday';
      
        newButton.innerHTML = buttonName;
        newButton.id = newButtonID;
        
        buttonContainer.appendChild(newButton);
      }
      
      createHolidayButton('Feriados');

      function displayHolidays() {
        let getHolidayButton = document.querySelector('#btn-holiday');
        let getHolidays = document.querySelectorAll('.holiday')
        let backgroundColor = 'rgb(238,238,238)';
        let setNewColor = 'white';
      
        getHolidayButton.addEventListener('click', function() {
          for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === setNewColor) {
              getHolidays[index].style.backgroundColor = backgroundColor;
            } else {
              getHolidays[index].style.backgroundColor = setNewColor;
            }
          }
        });
      }
      displayHolidays();

      function createFridayButton(buttonName) {
        let buttonContainer = document.querySelector('.buttons-container');
        let newButton = document.createElement('button');
        let newButtonID = 'btn-friday';
      
        newButton.innerHTML = buttonName;
        newButton.id = newButtonID;
        buttonContainer.appendChild(newButton); 
      }
      createFridayButton('Sexta-feira');

      function displayFridays(fridaysArray) {
        let getFridayButton = document.querySelector('#btn-friday');
        let fridays = document.getElementsByClassName('friday');
        let newFridayText = 'SEXTOU o/';
      
        getFridayButton.addEventListener('click', function() {
        for (let index = 0; index < fridays.length; index += 1) {
          if (fridays[index].innerHTML !== newFridayText) {
              fridays[index].innerHTML = newFridayText;
          } else {
              fridays[index].innerHTML = fridaysArray[index];
            
            }
          }
        });
      }
      let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '10px';
    event.target.style.fontWeight = '400'; 
  });
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '10px';
    event.target.style.fontWeight = '400'; 
  });
}
dayMouseOver();
dayMouseOut();

function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
}
newTaskSpan('projeto');

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask); 
}
newTaskDiv('gold');

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}
setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; 
      event.target.style.color = color; 
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  
    }
  });
}
setDayColor();