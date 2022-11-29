$(document).ready(function(){

  /**
   * Toggles "done" class on <li> element
  */
  const doneEvent = function(li){
    li.click(function () {
        //toggle "done" class
        $(this).toggleClass(`done`)
    })
  }
  $('li').each(function(_i, li) {
    let $item = $(li);
    doneEvent($item)
  });


  
  /**
   * Delete element when delete link clicked
   */
  const deleteEvent = function(btn){
    btn.click(function () {
      //toggle its "done" class
      $(this).parent().fadeOut()
    })
  }
  
  $('.delete').each(function(_i, li) {
    let $btn = $(li);
    deleteEvent($btn)
  });


  /**
   * Adds new list item to <ul>
  */

  const addListItem = function(e) {
    e.preventDefault();
    let $input = $('input')
    const $text = $input.val();
    const $span = $('<span>').text($text)

    // create delete element
    const $deleteBtn = $('<a>')
      .text('Delete')
      .addClass('delete')
      
    //new element
    const $newItem = $('<li>').append($span).append($deleteBtn)

    // Place at the end of the UL tag
    $('ul').append($newItem)

    // add delete and strikethrough logic to new li
    doneEvent($newItem)
    deleteEvent($deleteBtn)

    //clear the text field
    $input.val('')
  }

  // Add listener
  $('.add-item').click(addListItem)
});