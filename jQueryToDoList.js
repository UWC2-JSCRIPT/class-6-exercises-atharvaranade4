$(document).ready(function(){

  /**
   * Toggles "done" class on <li> element
  */
  const doneEvent = function(){
    $('li').click(function () {
        //toggle "done" class
        $(this).toggleClass(`done`)
    })
  }
  doneEvent()

  /**
   * Delete element when delete link clicked
  */
   const deleteEvent = function(){
    $('.delete').click(function () {
        //toggle its "done" class
        $(this).parent().fadeOut()
    })
  }
  deleteEvent()

  /**
   * Adds new list item to <ul>
  */

  const addListItem = function(e) {
    e.preventDefault();
    let $input = $('input')
    const $text = $input.val();
    const $span = $('<span>')
      .text($text)

    // create delete element.
    const $deleteBtn = $('<a>')
      .text('Delete')
      .addClass('delete')
      
    //new element.
    const $newItem = $('<li>').append($span).append($deleteBtn)

    // Place at the end of the UL tag
    $('ul').append($newItem)

    // add delete and strikethrough logic to new li
    doneEvent()
    deleteEvent()

    //clear the text field
    $input.val = ''
  }

  // Add listener
  $('.add-item').click(addListItem)


});