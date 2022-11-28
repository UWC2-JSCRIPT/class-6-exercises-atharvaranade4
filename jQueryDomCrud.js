$(document).ready(function(){    
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const $a = $('<a>')
    $a.text("Buy Now!")
    $a.attr('id','cta')
    $('main').append($a)

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const $img = $('img')
    const imgColor = $img.data('color')
    console.log(imgColor)

    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    const $li = $('li')
    const thirdLi = $li[2]
    thirdLi.setAttribute('class', 'highlight')

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    const $paragraphs = $('p')
    $paragraphs.remove()

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $a.click(function(){
        const $newText = $('<h3>').text(`Added to cart`)
        $('main').append($newText)
        $(this).remove()
    })
})