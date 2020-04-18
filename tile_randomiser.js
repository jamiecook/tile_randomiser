var colours          = ["red","grey","lightblue", "lightgreen", "darkgreen", "darkblue"];
var colours_str      = colours.join(' ');
var num_colours      = colours.length;
var orientations     = ["horizontal", "vertical"];
var orientations_str = orientations.join(' ');
var small_tile_html  = "<div class='tile-small'></div>";
var tile_html        = "<div class='tile'></div>";
var pair_tile_html   = "<div class='pair-container'>"+tile_html+tile_html+"</div>";

function get_random_colour() {
    return colours[Math.floor(Math.random()*num_colours)];
}

function get_random_orientation() {
    return orientations[Math.floor(Math.random()*orientations.length)];
}

function change_colour() {
    $(this).removeClass(colours_str).addClass(get_random_colour());
}

function change_orientation() {
    var orientation = get_random_orientation();
    $(this).children().removeClass(orientations_str).addClass(orientation);
}

function randomise_colour() {
    $(".tile").each(change_colour);
    $(".tile-small").each(change_colour)
}

function randomise_orientation() {
    $('.pair-container').each(change_orientation);
}

function set_click_colour() {
    // alert('click on a tile to change its colour');
    $(".tile").click(change_colour);
    $(".pair-container").off('click');
}
function set_click_orientation() {
    $(".tile").off('click');
    $(".pair-container").click(change_orientation);
}

function populate_tiles() {
    for (var i=0; i<13*3; ++i) {
        $('.tile-container').append(pair_tile_html);
    }
    for (var i=0; i<13*3*2*2; ++i) {
        $('.tile-container-small').append(small_tile_html);
    }
}

window.onload = function set_button_click_event() {
    populate_tiles();
    randomise_colour();
    randomise_orientation();
    $(".tile").click(change_colour);
    $(".tile-small").click(change_colour);
}