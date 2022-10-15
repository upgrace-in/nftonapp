export default function Sample(props) {
    return (
        <li>
            <div className="nft__item">
                <div className="img_holder">
                    <img src="img/drops/1.jpg" alt=""/>
                        <a href={props.href} className="full_link"></a>
                </div>
                <div className="title_holder">
                    <h3 className="fn_title"><a href="#">Meta Legends #4588</a></h3>
                </div>
            </div>
        </li>
    )
}