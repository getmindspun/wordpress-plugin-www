import {Props} from "./types";

const CTA = (props: Props['attributes']['button']) => {
	return (
		<div className="ad-cta">
			<a className="ad-btn ad-btn-white" href={props.link}>{props.text}</a>
		</div>
	);
}

export default CTA;
