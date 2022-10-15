import Sample from './subcomp/Sample'

export default function Samples() {
    return (
        <div class="container small">
            <div className="metaportal_fn_similar">
                <h3 className="fn__maintitle" data-text="Similar Items">Similar Items</h3>
                <div className="fn_cs_divider">
                    <div className="divider">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="metaportal_fn_drops">
                    <ul className="grid">
                        <Sample href="hari" />
                        <Sample href="hari" />
                        <Sample href="hari" />
                        <Sample href="hari" />
                        <Sample href="hari" />
                        <Sample href="hari" />
                    </ul>
                </div>
            </div>
        </div>
    )
}