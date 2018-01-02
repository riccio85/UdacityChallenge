
const table = $('#pixel_canvas');
const colorPicker = $('#colorPicker');
let color = colorPicker.val();

function makeGrid() {
    let height =  parseInt($('#input_height').val());
    let width = parseInt($('#input_width').val());
    let trs = '';

    for(let i=0; i <  height; i++){
        trs += '<tr>' 
        for(let j=0; j < width; j++){
            trs += '<td class="color-changeable"></td>'; 
        }
        trs += '</tr>';
    };

    table.empty();
    table.append(trs);
};

$('#sizePicker').submit(function( event ) {
    makeGrid();
    event.preventDefault();
});

table.delegate( '.color-changeable', 'click', function() {
    $(this).css('background-color',color);
});

colorPicker.change(function(){
    color= colorPicker.val();
})
