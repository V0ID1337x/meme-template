$(document).ready(function() {
    $('#content-select').change(function(){
        var value = $(this).val();
        if(value == 'image-gif' || value == 'webm-mp4') {
            $('#custom-file').html(`<input type="file" class="custom-file-input" id="file" required>
                                    <label for="file" class="custom-file-label">Choose file</label>`);
        }
        else {
            $('#custom-file').html(`<input type="text" class="form-control" aria-describedby="URL" id="file" placeholder="Paste URL" required>`);
        }
    });
    
    $('#reset-upload-data').click(function(){
        $('#custom-file').html(`<input type="file" class="custom-file-input" id="file" required>
                                    <label for="file" class="custom-file-label">Choose file</label>`);
    });
    
    $('#file').change(function() {
        var file_name = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(file_name); 
    });
});