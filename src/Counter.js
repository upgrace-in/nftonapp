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
									<span className="fn_cs_counter" data-from="0" data-to="9999" data-speed="3000" data-decimals="0">0</span>
									<span className="suffix"></span>
								</h3>
								<p>Total Items</p>
								<div className="divider"></div>
							</div>
						</li>
						<li>
							<div className="item">
								<h3 className="fn__gradient_title">
									<span className="prefix"></span>
									<span className="fn_cs_counter" data-from="0" data-to="3.9" data-speed="3000" data-decimals="1">0</span>
									<span className="suffix">k+</span>
								</h3>
								<p>Total Owners</p>
								<div className="divider"></div>
							</div>
						</li>
						<li>
							<div className="item">
								<h3 className="fn__gradient_title">
									<span className="prefix"></span>
									<span className="fn_cs_counter" data-from="0" data-to="2.4" data-speed="3000" data-decimals="1">0</span>
									<span className="suffix"></span>
								</h3>
								<p>Floor Price (ETH)</p>
								<div className="divider"></div>
							</div>
						</li>
						<li>
							<div className="item">
								<h3 className="fn__gradient_title">
									<span className="prefix"></span>
									<span className="fn_cs_counter" data-from="0" data-to="144" data-speed="3000" data-decimals="0">0</span>
									<span className="suffix">k+</span>
								</h3>
								<p>Volume Traded (ETH)</p>
								<div className="divider"></div>
							</div>
						</li>
					</ul>
				</div>
				
			</div>
		</section>
    )
}