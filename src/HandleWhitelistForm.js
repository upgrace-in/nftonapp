export default function HandleWhitelistForm() {
    return (
        <div id="whitelistSection" className="text-center metaportal_fn_protected" style={{display: 'none', padding:0, width: 100+'%'}}>
            <div className="container">
                <div className="message_holder">
                    <div className="container-custom">
                        <form id="whitelistForm">
                            <input required placeholder="Please, enter your wallet address..." id="walletAddress" name="walletAddress" type="text" />
                            <a id="whitelistBTN" className="text-center cr metaportal_fn_button"><span>Whitelist Me</span></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}