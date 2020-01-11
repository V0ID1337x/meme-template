/* Need to get liked data from database first */
var liked = [];

function likedMemes(json_data) {
    liked = JSON.parse(json_data);
    /*liked.forEach(function(element, index, array){ // I think it will be done in template
        let obj = $(`#meme-${element}`);
        let html_data = obj.html();
        obj.html(html_data.replace('🖤', '❤'));
    });*/
}

$(document).ready(function() {
    $('.like').click(function() {
        /* Slice from meme- the rest is ID of the image */
        let meme_id = parseInt($(this).attr('id').slice(5));
        if(liked.indexOf(meme_id) == -1) {
            liked.push(meme_id);
            let like_count = parseInt($(this).html().slice(2));
            like_count++;
            $(this).html(`❤ ${like_count}`); // Red heart
            /* AJAX call to send data */
        }
        else {
            liked.splice(liked.indexOf(meme_id), 1);
            let like_count = parseInt($(this).html().slice(2));
            like_count--;
            $(this).html(`🖤 ${like_count}`); // Black heart
            /* AJAX call to send data */
        }
    });
});