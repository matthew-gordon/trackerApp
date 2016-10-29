'use strict';
$(document).ready(function(){
var taskValue = $('#taskField');
var toDoList = $('#toDo');
var addBtn = $('#addTask');
var removeBtn = $('#removeTask');
// console.log(addBtn);

  // // Button click function
  // $('#button').click(function(){
  //
  //   // GET content from github file
  //   $.get('https://api.github.com/repos/redemption23/trackerApp/contents/file.txt', function(data){
  //     var content = atob(data.content);
  //     $('#box').append(content);
  //   });
  // });

  // add task
  addBtn.click(function(){
    var item = taskValue.val();
    toDoList.append(item + '</br>');
    taskValue.val('');
  });

  // remove task
  removeBtn.click(function(){
    toDoList.empty();
  })


});
