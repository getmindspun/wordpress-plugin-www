import {Props} from "./types";

const CTA = (props: Props['attributes']['button']) => {

	const {text, link, ...style} = props;

	return (
		<div className="ad-cta">
			<a className="ad-btn ad-btn-primary" style={style} href={link}>{text}</a>
		</div>
	);
}

export default CTA;
