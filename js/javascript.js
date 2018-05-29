$(function () {
    $("#dog-song").click(function () {
        const snd = "<audio autoplay=true> <source src='./js/song/dog.mp3'> </audio>";
        $("#dog-song").append(snd);
    });
    $("#tiger-song").click(function () {
        const snd = "<audio autoplay=true> <source src='./js/song/tiger.mp3'> </audio>";
        $("#tiger-song").append(snd);
    });
    $("#singe-song").click(function () {
        const snd = "<audio autoplay=true> <source src='./js/song/singe.mp3'> </audio>";
        $("#singe-song").append(snd);
    });
    $("#pig-song").click(function () {
        const snd = "<audio autoplay=true> <source src='./js/song/pig.mp3'> </audio>";
        $("#pig-song").append(snd);
    });
    $("#zebre-song").click(function () {
        const snd = "<audio autoplay=true> <source src='./js/song/zebre.mp3'> </audio>";
        $("#zebre-song").append(snd);
    });
    $("#pingouin-song").click(function () {
        const snd = "<audio autoplay=true> <source src='./js/song/penguin.mp3'> </audio>";
        $("#pingouin-song").append(snd);
    });




    $(".container-animals__img__child").click(function () {
        var modal = $(this).data('modal');
        $("#modal-" + modal).css("display", "block");
    });

    $("#close-btn").click(function(){
        $(".container-animals-modal").css("display", "none");
    })



});