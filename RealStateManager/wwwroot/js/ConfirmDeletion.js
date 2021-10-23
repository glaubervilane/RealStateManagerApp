﻿function ConfirmDeletion(id, name, controller) {
    $('.modal').modal({
        dismissble: true
    });

    $('#modal').modal('open');
    $(".name").text(name);
    const url = "/" + controller + "/Delete";

    $(".btnDelete").on('click', function () {
        $.ajax({
            method: "POST",
            url: url,
            data: { id: id },
            success: function (date) {
                location.reload(true);
            }
        })
    })
}