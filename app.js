/* WE need to create a new To-Do list and add new items to each list */
/* var toDoListAppState = {
  lists: [
    {
      items: [
        {
          value: 'Chao',
          completed: false
        }
      ]
    },
    {
      items: [
        {
          value: 'Hola',
          completed: true
        }
      ]
    }
  ]
}; */
var toDoListAppState = {};

function updateToDoListApp() {
  var listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';

  var lists = toDoListAppState.lists;
  lists.forEach( function(list) {
    var newList = createNewList();

    var listItems = list.items;
    listItems.forEach( function(item) {
        var newItem = createNewListItem();
        var newItemCheckbox = newItem.childNodes[0];
        var newItemText = newItem.childNodes[1];

        var itemContainer;
        newItemCheckbox.checked = item.completed;
        newItemText.value =  item.value;
        if(item.completed) {
          itemContainer = newList.querySelector('.complete-task-body');
        } else {
          itemContainer = newList.querySelector('.pending-task-body');
        }

        appendHtmlElement(newItem, itemContainer);
    });

    appendHtmlElement(newList, listContainer);

  });
};

function createHtmlStructures(template) {
  var htmlStructure = template.map(
    function(element) {
      return createHtmlElement(element.tag, element.attributes, element.elementText);
    }
  );

  htmlStructure.forEach( function(element, index) {
    var parentClass = template[index].parent;
    var parent = htmlStructure.find(function(element) {
      return element.className === parentClass;
    });

    if(parent) {
      appendHtmlElement(element, parent);
    }
  });

  return htmlStructure[0];
}

function createNewList() {
  var listTemplate = [
    {
      tag: 'div',
      attributes: {'class': 'list'},
      isParent: true
    },
    {
      tag: 'div',
      attributes: {'class': 'list-header'},
      parent: 'list'
    },
    {
      tag: 'button',
      attributes: {'class': 'new-list-item'},
      parent: 'list-header'
    },
    {
      tag: 'button',
      attributes: {'class': 'list-options'},
      parent: 'list-header'
    },
    {
      tag: 'div',
      attributes: {'class': 'list-main'},
      parent: 'list'
    },
    {
      tag: 'div',
      attributes: {'class': 'pending-task-div'},
      parent: 'list-main'
    },
    {
      tag: 'header',
      attributes: {'class': 'pending-task-header'},
      elementText: 'Pending Tasks',
      parent: 'pending-task-div'
    },
    {
      tag: 'div',
      attributes: {'class': 'pending-task-body'},
      parent: 'pending-task-div'
    },
    {
      tag: 'div',
      attributes: {'class': 'complete-task-div'},
      parent: 'list-main'
    },
    {
      tag: 'header',
      attributes: {'class': 'complete-task-header'},
      elementText: 'Completed Tasks',
      parent: 'complete-task-div'
    },
    {
      tag: 'div',
      attributes: {'class': 'complete-task-body'},
      parent: 'complete-task-div'
    },
    {
      tag: 'div',
      attributes: {'class': 'list-footer'},
      parent: 'list'
    },
    {
      tag: 'div',
      attributes: {'class': 'total-task'},
      parent: 'list-footer'
    },
    {
      tag: 'span',
      attributes: {'class': 'total-task-label'},
      elementText: 'Total Tasks: ',
      parent: 'total-task'
    },
    {
      tag: 'div',
      attributes: {'class': 'total-task-amount'},
      parent: 'total-task'
    },
    {
      tag: 'div',
      attributes: {'class': 'completed-task'},
      parent: 'list-footer'
    },
    {
      tag: 'span',
      attributes: {'class': 'completed-task-label'},
      elementText: 'Completed Tasks: ',
      parent: 'completed-task'
    },
    {
      tag: 'span',
      attributes: {'class': 'completed-task-amount'},
      parent: 'completed-task'
    },
    {
      tag: 'div',
      attributes: {'class': 'pending-task'},
      parent: 'list-footer'
    },
    {
      tag: 'span',
      attributes: {'class': 'pending-task-label'},
      elementText: 'Pending Tasks: ',
      parent: 'pending-task'
    },
    {
      tag: 'span',
      attributes: {'class': 'pending-task-amount'},
      parent: 'pending-task'
    }
  ];

  return createHtmlStructures(listTemplate);
}

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function createHtmlElement(elementTag, elementAttributes, elementText) {
  var newHtmlElement = document.createElement(elementTag);
  setAttributes(newHtmlElement, elementAttributes);
  if (elementText) {
    newHtmlElement.innerText = elementText;
  }

  return newHtmlElement;
};

function appendHtmlElement(child, parent) {
  parent.appendChild(child);
}

function createNewListItem() {
  var itemTemplate = [
    {
      tag: 'div',
      attributes: {'class': 'list-item'},
      isParent: true
    },
    {
      tag: 'input',
      attributes: {'class': 'checkbox', 'type': 'checkbox'},
      parent: 'list-item'
    },
    {
      tag: 'input',
      attributes: {'class': 'textbox', 'type': 'text'},
      parent: 'list-item'
    },
    {
      tag: 'button',
      attributes: {'class': 'save'},
      parent: 'list-item'
    },
    {
      tag: 'button',
      attributes: {'class': 'edit'},
      parent: 'list-item'
    },
    {
      tag: 'button',
      attributes: {'class': 'delete-list-item'},
      parent: 'list-item'
    }
  ];

  return createHtmlStructures(itemTemplate);
}

/* We need to add the created list to a given container */
function addNewListToContainer() {
  var listContainer = document.getElementById('list-container');
  var newList = createNewList();
  appendHtmlElement(newList, listContainer);
}

document.getElementById('new-list-button').addEventListener('click', function() {
  addNewListToContainer();
  saveState();
});

function addNewItemToContainer(container) {
  var newItem = createNewListItem();
  appendHtmlElement(newItem, container);
}

document.getElementById('list-container').addEventListener('click', function(e) {
  if(e.target.className === 'new-list-item') {
    var targetList = e.target.parentNode.parentNode;
    var itemContainer = targetList.querySelector('.pending-task-body');
    addNewItemToContainer(itemContainer);
    saveState();
  }

  if(e.target.className === 'checkbox') {
      saveState();
      updateToDoListApp();
  }

  if(e.target.className === 'save') {
    saveState();
  }
});

/* We need to save created list and its items and them restore them when we reload the application */
function updateAppState() {
  var lists = [].slice.call(document.querySelectorAll('.list'));
  var newStateLists = lists.map( function(list) {
    var listItems = [].slice.call(list.querySelectorAll('.list-item'));

    var newStateItems = listItems.map( function(item) {
      var checkbox = item.querySelector('.checkbox');
      var text = item.querySelector('.textbox');

      return {completed: checkbox.checked, value: text.value};
    });

    return {items: newStateItems}
  });

  toDoListAppState.lists = newStateLists;
};

function saveStateIntoLocalStorage() {
  localStorage.setItem('toDoListApp', JSON.stringify(toDoListAppState));

};

function saveState() {
  updateAppState();
  saveStateIntoLocalStorage();
};

function loadLists() {
  var toDoListAppNewState = JSON.parse(localStorage.getItem('toDoListApp'));
  if(toDoListAppNewState) {
    toDoListAppState = toDoListAppNewState;
    updateToDoListApp();
  } else {
    console.log('Nothing to load');
  }
};

loadLists();
