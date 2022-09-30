export default function Contact() {
	return (
		<section id="contact">
			<div className="container">

				<h3 className="fn__maintitle big" data-text="Contact Us" data-align="center">Contact Us</h3>

				<div className="fn_cs_contact_info">
					<ul>
						<li>
							<div className="item">
								<p>Do send us any kind of query... <br/>We will feel grateful in helping you out :)</p>
							</div>
						</li>
						<li>
							<div className="item">
								<h4 className="lable">Email</h4>
								<h3><a href="mailto:nfton.io@gmail.com">nfton.io@gmail.com</a></h3>
							</div>
						</li>
						<li>
							<div className="item">
								<h4 className="label">Social</h4>
								<h3><a href="https://twitter.com/NFTON_IO">Follow us on Twitter</a></h3>
							</div>
						</li>
					</ul>
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
									<div className="mw300">
										<a id="send_message" href="#" className="metaportal_fn_button full">
											<span>Send Query</span>
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