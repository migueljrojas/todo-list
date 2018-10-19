
document.getElementById('new-list-button').addEventListener('click', function(){
  createList();
});

function createList() {

  // create list body and append it to list container
  var list = document.createElement('div');
  list.className = 'list';
  document.getElementById('list-container').appendChild(list);

  // create list header content
  var listHeader = document.createElement('div');
  listHeader.className = 'list-header'
  var newListItem = document.createElement('button')
  newListItem.className = 'new-list-item'
  listHeader.appendChild(newListItem)
  var listOptions = document.createElement('button')
  listOptions.className = "list-options"
  listHeader.appendChild(listOptions)
  list.appendChild(listHeader)

  // create list main content
  var listMain = document.createElement('div');
  listMain.className = 'list-main'
  list.appendChild(listMain)
  var pendingTaskDiv = document.createElement('div')
  pendingTaskDiv.className = 'pending-task-div'
  listMain.appendChild(pendingTaskDiv)
  var pendingTaskHeader = document.createElement('header')
  pendingTaskHeader.className = 'pending-task-header'
  pendingTaskHeader.innerText = "Pending Tasks"
  pendingTaskDiv.appendChild(pendingTaskHeader)
  var pendingTaskBody = document.createElement('div')
  pendingTaskBody.className = 'pending-task-body'
  pendingTaskDiv.appendChild(pendingTaskBody)

  pendingTaskDiv.style.visibility = 'hidden';

  var completeTaskDiv = document.createElement('div')
  completeTaskDiv.className = 'complete-task-div'
  listMain.appendChild(completeTaskDiv)
  var completeTaskHeader = document.createElement('header')
  completeTaskHeader.className = 'complete-task-header'
  completeTaskHeader.innerText = "Completed Tasks"
  completeTaskDiv.appendChild(completeTaskHeader)
  var completeTaskBody = document.createElement('div')
  completeTaskBody.className = 'complete-task-body'
  completeTaskDiv.appendChild(completeTaskBody)

  completeTaskDiv.style.visibility = 'hidden';

// create list footer content
  var listFooter = document.createElement('div');
  listFooter.className = 'list-footer'

  var totalTask = document.createElement('div')
  totalTask.className = 'total-task'
  listFooter.appendChild(totalTask)
  var totalTaskLabel = document.createElement('span')
  totalTaskLabel.className = 'total-task-label'
  totalTaskLabel.innerText = "Total Tasks: "
  totalTask.appendChild(totalTaskLabel)
  var totalTaskAmount = document.createElement('span')
  totalTaskAmount.className = 'total-task-amount'
  totalTask.appendChild(totalTaskAmount)

  var completedTask = document.createElement('div')
  completedTask.className = 'completed-task'
  listFooter.appendChild(completedTask)
  var completedTaskLabel = document.createElement('span')
  completedTaskLabel.className = 'completed-task-label'
  completedTaskLabel.innerText = "Complete Tasks: "
  completedTask.appendChild(completedTaskLabel)
  var completedTaskAmount = document.createElement('span')
  completedTaskAmount.className = 'completed-task-amount'
  completedTask.appendChild(completedTaskAmount)

  var pendingTask = document.createElement('div')
  pendingTask.className = 'pending-task'
  listFooter.appendChild(pendingTask)
  var pendingTaskLabel = document.createElement('span')
  pendingTaskLabel.className = 'completed-task-label'
  pendingTaskLabel.innerText = "Pending Tasks: "
  pendingTask.appendChild(pendingTaskLabel)
  var pendingTaskAmount = document.createElement('span')
  pendingTaskAmount.className = 'pending-task-amount'
  pendingTask.appendChild(pendingTaskAmount)
  list.appendChild(listFooter)

    var listClassName = document.getElementsByClassName('new-list-item')
    var classNumber = listClassName.length
    var classNumber1 = classNumber-1

    document.getElementsByClassName('new-list-item')[classNumber1].addEventListener('click',function(){
      pendingTaskDiv.style.visibility = 'initial'
      var listItem = document.createElement('div');
      listItem.className = 'list-item'
      var textBox = document.createElement('input')
      textBox.className = 'textbox'
      listItem.appendChild(textBox)
      textBox.disabled = true;
      var deleteListItem = document.createElement('button')
      deleteListItem.className = 'delete-list-item'
      listItem.appendChild(deleteListItem)
      var save = document.createElement('button')
      save.className = 'save'
      listItem.appendChild(save)
      var edit = document.createElement('button');
      edit.className = 'edit'
      listItem.appendChild(edit)
      var complete = document.createElement('button');
      complete.className = 'complete'
      listItem.appendChild(complete)
      document.getElementsByClassName('pending-task-body')[classNumber1].appendChild(listItem)

      var itemArray = document.getElementsByClassName('list-item')
      var itemCount = itemArray.length
      var itemCount1 = itemCount-1

      var totalPendingItems = pendingTaskBody.children.length;
      var totalCompleteItems = completeTaskBody.children.length;

      totalTaskAmount.innerText = totalCompleteItems + totalPendingItems;

      completedTaskAmount.innerText = totalCompleteItems
      pendingTaskAmount.innerText = totalPendingItems

      document.getElementsByClassName('edit')[itemCount1].addEventListener('click', function(){
        textBox.disabled = false;
        textBox.focus();
      })

      document.getElementsByClassName('save')[itemCount1].addEventListener('click', function(){
        textBox.disabled = true;
        textBox.style.color = 'black';
      })

      document.getElementsByClassName('delete-list-item')[itemCount1].addEventListener('click', function(){
        var listSelect = document.getElementsByClassName('delete-list-item')[classNumber1].parentNode.parentNode;

        if(listSelect.className == 'pending-task-body'){
          pendingTaskBody.removeChild(listItem)
          var totalPendingItems = pendingTaskBody.children.length;
          var totalPendingItems = pendingTaskBody.children.length;
          totalTaskAmount.innerText = totalCompleteItems + totalPendingItems;
          pendingTaskAmount.innerText = totalPendingItems
        } else {
          var totalPendingItems = pendingTaskBody.children.length;
          var totalPendingItems = pendingTaskBody.children.length;
          totalTaskAmount.innerText = totalCompleteItems + totalPendingItems;
          completeTaskAmount.innerText = totalPendingItems
          completeTaskBody.removeChild(listItem)
        }
      })

      document.getElementsByClassName('complete')[itemCount1].addEventListener('click', function(){
          completeTaskDiv.style.visibility = 'initial'
      })

      console.log(listMain)


    })
}
