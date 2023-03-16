$(document).ready(function () {
    // Set div display to none
    $(".close_btn").click(function () {
        // $(".sidebar").css("left", "-400px");
        $(".sidebar").removeClass("toggle_menu");
    });

    // Set div display to block
    $(".toggle").click(function () {
        // $(".sidebar").css("left", "0px");
        $(".sidebar").addClass("toggle_menu");
    });
    $("#form-date").pDatePicker({
        selected: new Date(2023, 1, 20), // Feb 20, 2023
        mondayFirst: true,
    });
    $("#to-date").pDatePicker({
        selected: new Date(2023, 1, 20), // Feb 20, 2023

    });

    $("#one-date").pDatePicker({
        selected: new Date(2023, 1, 20), // Feb 20, 2023

    });
    $("#two-date").pDatePicker({
        selected: new Date(2023, 1, 20), // Feb 20, 2023

    });
    $("#Date-Birth").pDatePicker({
        selected: new Date(2023, 1, 20), // Feb 20, 2023

    });

    // Employee table
    $(".employee_wrapper button.nav-link").on("click", function () {
        let id = $(this).attr('id');
        if (id == 'pills-contact-tab') {
            $("#employee-pagination").addClass("d-none");

        } else {

            $("#employee-pagination").removeClass("d-none");
        }
    });

    $("#time").pDatePicker({
        showDate: new Date(2023, 1), // Feb 2023
    });

    //
    $("#Nationality").select2({
        placeholder: "Nationality",
        allowClear: true
    });
    $("#Month").select2({
        placeholder: "Weekly",
        allowClear: true
    });
    $("#code").select2({
        placeholder: "R",
        allowClear: true
    });
    $("#Mobile-Number").intlTelInput({
        customPlaceholder: null,
        allowDropdown: true,
        separateDialCode: true,
        initialCountry: "ca",

    });
    $("#Phone-Number").intlTelInput({
        customPlaceholder: null,
        allowDropdown: true,
        separateDialCode: true,
        initialCountry: "ca",
    });
    $("#Hire-Date").pDatePicker({
        selected: new Date(2023, 1, 20), // Feb 20, 2023

    });
    $("#hire_date").pDatePicker({
        selected: new Date(2023, 1, 20), // Feb 20, 2023

    });
    $("#birth_date").pDatePicker({
        selected: new Date(2023, 1, 20), // Feb 20, 2023

    });


    //user
    $('#chk_all').click(function () {
        $('#myButton').prop("disabled", !$("#myCheckbox").prop("checked"));
    });




});
// $(document).ready(function () {
//     $('#imageUpload').on('click', function () {
//         $('.imageUpload').addClass('d-none');
//         $('.avatar-edit').css('opacity', '1');
//     });

//     $('.avatar-upload').on('mouseenter', function () {
//         $(this).css('opacity', '0.5');
//         $('.imageUpload').removeClass('d-none');
//     }).on('mouseleave', function () {
//         $(this).css('opacity', '1');
//         $('.imageUpload').addClass('d-none');
//     });
// });

$(document).ready(function () {
    var imageUploaded = false;


    // show label with 0.5 opacity on hover if image uploaded
    $('.avatar-upload').on('mouseenter', function () {
        if (imageUploaded) {
            $('.imageUpload').removeClass('d-none');
            $(this).css('opacity', '0.5');
        }
    }).on('mouseleave', function () {
        if (imageUploaded) {
            $(this).css('opacity', '1');
            $('.imageUpload').addClass('d-none');
        }
    });

    // hide label when image is uploaded
    $('#imageUpload').on('change', function () {
        $('.avatar-edit').css('opacity', '0.5');
        $('.imageUpload').addClass('d-none');
        $('.primary-text-color').removeClass('d-none');
        $('.mx-w-182').addClass('d-none');
        imageUploaded = true;
    });
});


// image upload 
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function () {
    readURL(this);
});

// user
$(function () {
    enable_cb();
    $("#chk_all").click(enable_cb);
});

function enable_cb() {
    if (this.checked) {
        $("input.checkbox-user").attr("disabled", true);
        $('input.checkbox-user').attr("checked").css('background-color', 'red');
    } else {
        $("input.checkbox-user").removeAttr("disabled");

    }
}
$('#chk_all').click(function () {
    $('.checkbox-user').prop('checked', this.checked);
});

$('.checkbox-user').change(function () {
    var check = ($('.checkbox-user').filter(":checked").length == $('.checkbox-user').length);
    $('#chk_all').prop("checked", check);
});