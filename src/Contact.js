export default function Contact(){
    return (
        <section id="contact">
			<div className="container">
			
				<h3 className="fn__maintitle big" data-text="Contact Us" data-align="center">Contact Us</h3>
				
				<div className="fn_cs_contact_info">
				</div>
				
				<div className="fn_cs_contact_form">
					<form action="/" method="post" className="contact_form" id="contact_form" autoComplete="off">
						<div className="input_list">
							<ul>
								<li>
									<input id="name" type="text" placeholder="Your Name *" />
								</li>
								<li>
									<input id="email" type="text" placeholder="Your Email *" />
								</li>
								<li className="full">
									<textarea id="message" placeholder="Your Message *"></textarea>
								</li>
								<li className="full">
									{/* <label className="fn__checkbox">
										<input type="checkbox"/>
										<span className="fn__checkmark">
											<img src="svg/checked.svg" alt="" className="fn__svg"/>
										</span>
										<p>I’m okay with getting emails and having that activity tracked to improve my experience.</p>
									</label> */}
									<div className="mw300">
										<a id="send_message" href="#" className="metaportal_fn_button full">
											<span>Send Message</span>
										</a>
									</div>
									
								</li>
							</ul>
						</div>
						<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
						<div className="empty_notice"><span>! Please Fill Required Fields !</span></div>
					</form>
				</div>
				
			</div>
		</section>
    )
}