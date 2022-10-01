function uuid(mask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx') {
    return `${mask}`.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

async function pushContactQueryToFirebase(name, email, message, success) {
    await firebase.firestore().collection('queries').doc(uuid('Contactxxxxxxx')).set({ name: name, email: email, message: message }).then(() => {

        if ($(".contact_form .returnmessage span.contact_error").length) {
            $(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
        } else {
            $(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
            $(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
        }

        $("#contact_form")[0].reset();

        $('#send_message').removeClass('disabledBtn')
    });
}

$(document).ready(async function () {

    const firebaseConfig = {
        apiKey: "AIzaSyCWPeyNoNqWgExoUxzk-o1EGQADsqEN84w",
        authDomain: "nftonio-e58f3.firebaseapp.com",
        projectId: "nftonio-e58f3",
        storageBucket: "nftonio-e58f3.appspot.com",
        messagingSenderId: "1063527472820",
        appId: "1:1063527472820:web:0f358d09841ac014e3c1e1"
    };

    // Initializing Firebase
    await firebase.initializeApp(firebaseConfig);

});

$(".contact_form #send_message").on('click', async function () {

    $('#send_message').addClass('disabledBtn')

    var name = $(".contact_form #name").val();
    var email = $(".contact_form #email").val();
    var message = $(".contact_form #message").val();
    var success = $(".contact_form .returnmessage").data('success');

    $(".contact_form .returnmessage").empty(); //To empty previous error/success message.
    //checking for blank fields	
    if (name === '' || email === '' || message === '') {
        $('#send_message').removeClass('disabledBtn')
        $('.contact_form .empty_notice').slideDown(500).delay(2000).slideUp(500);
    }
    else {
        await pushContactQueryToFirebase(name, email, message, success)
    }
    return false;
    
});