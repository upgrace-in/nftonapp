export default function Counter(){
    return (
        <section id="fun_facts">
			<div className="container">
				<div className="fn_cs_counter_list">
					<ul>
						<li>
							<div className="item">
								<h3 className="fn__gradient_title">
									<span className="prefix"></span>
									<span className="fn_cs_counter" data-from="0" data-to="369" data-speed="2000" data-decimals="0">0</span>
									<span className="suffix"></span>
								</h3>
								<p>Max Supply</p>
								<div className="divider"></div>
							</div>
						</li>
						<li>
							<div className="item">
								<h3 className="fn__gradient_title">
									<span className="prefix"></span>
									<span className="fn_cs_counter" data-from="0" data-to="1" data-speed="1000" data-decimals="0">0</span>
									<span className="suffix"></span>
								</h3>
								<p>Max Mint Amount</p>
								<div className="divider"></div>
							</div>
						</li>
						<li>
							<div className="item">
								<h3 className="fn__gradient_title">
									<span className="prefix"></span>
									<span className="fn_cs_counter" data-from="0" data-to="0.03" data-speed="100" data-decimals="2">0</span>
									<span className="suffix"></span>
								</h3>
								<p>Public Cost (in ETH)</p>
								<div className="divider"></div>
							</div>
						</li>
						<li>
							<div className="item">
								<h3 className="fn__gradient_title">
									<span className="prefix"></span>
									<span className="fn_cs_counter" data-from="0" data-to="36" data-speed="2000" data-decimals="0">0</span>
									<span className="suffix">+</span>
								</h3>
								<p>Collaborators</p>
								<div className="divider"></div>
							</div>
						</li>
					</ul>
				</div>
				
			</div>
		</section>
    )
}