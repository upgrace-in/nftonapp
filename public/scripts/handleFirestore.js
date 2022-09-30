var web3;

function uuid(mask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx') {
    return `${mask}`.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
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

    // Pushing it to firebase collection
    async function push_it(sign) {
        await firebase.firestore().collection('trans').doc(sign).set({ address: sign });
    }

    // Verifying Address
    async function verify_address(sign) {
        const snapshot = await firebase.firestore().collection('trans').get()
        var address_map = snapshot.docs.map(doc => doc.data());
        for (var i = 0; i < address_map.length; i++) {
            if (sign === address_map[i]['address']) {
                alert("Your address is confirmed successfully !!!")
                return 1;
            } else {
                await push_it(sign)
            }
        }
    }

    // Initialising Web3
    web3 = new Web3(
        new Web3.providers.HttpProvider(
            'https://bsc-dataseed1.binance.org:443'
        )
    );
    window.web3 = new Web3(window.ethereum);

    // Signing transaction
    const sendTransaction = async (val) => {
        web3.eth.getAccounts().then(async function (acc) {
            if (acc !== undefined) {
                let message = web3.utils.utf8ToHex("zappsbirthdaybash_invitation");
                const sig = await web3.eth.personal.sign(message, acc[0], "zapp_pass!")
                    .then(async (txHash) => {
                        if (val === 'confirm') {
                            await verify_address(acc[0]);
                        } else {
                            await push_it(acc[0]);
                        }
                    })
                    .catch((error) => { console.log(error); });;
            } else {
                connectWeb3();
            }
        })
    }

    setTimeout(async () => {
        web3.eth.getAccounts().then(async function (acc) {
            if (acc[0] === undefined) {
                $('#confirm_btn').hide();
                $('#initiate_btn > span > span.elementor-button-text').html("CONNECT WALLET");
                $('#initiate_btn').click(async () => {
                    if (window.ethereum) {
                        await window.ethereum.enable();
                    }
                });
            } else {
                $('#initiate_btn').click(async () => {
                    await sendTransaction(null);
                });
                $('#confirm_btn').click(async () => {
                    await sendTransaction("confirm");
                })
                $('#confirm_btn').show();
            }
        });

        // Event check for account switching
        window.ethereum.on('accountsChanged', function (accounts) {
            location.reload();
        })
    }, 1500);

    $(".contact_form #send_message").on('click', async function () {
        var name = $(".contact_form #name").val();
        var email = $(".contact_form #email").val();
        var message = $(".contact_form #message").val();
        var success = $(".contact_form .returnmessage").data('success');

        $(".contact_form .returnmessage").empty(); //To empty previous error/success message.
        //checking for blank fields	
        if (name === '' || email === '' || message === '') {
            $('.contact_form .empty_notice').slideDown(500).delay(2000).slideUp(500);
        }
        else {
            // Returns successful data submission message when the entered information is stored in database.
            // $.post("modal/contact.php", { ajax_name: name, ajax_email: email, ajax_subject: subject, ajax_message: message, ajax_tel: tel }, function (data) {

            await firebase.firestore().collection('queries').doc(uuid('Contactxxxxxxx')).set(data);

            // });

            // $(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


            // if ($(".contact_form .returnmessage span.contact_error").length) {
            //     $(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
            // } else {
            //     $(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
            //     $(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
            // }

            // if (data === "") {
            //     $("#contact_form")[0].reset();//To reset form fields on success
            // }

        }
        return false;
    });
});