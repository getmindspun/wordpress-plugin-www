import {Props} from "./types";
import {buildCSSRuleset} from "../_common/style";

function isNotEmpty(buttonHover: Props['attributes']['buttonHover']) {
	return buttonHover.color || buttonHover.backgroundColor;
}

const CTA = (props: Props['attributes']) => {

	const {align, text, link, ...style} = props.button;
	const className = `.ad-inline-${props.instanceId}`;

	const hoverStyle = isNotEmpty(props.buttonHover) ? buildCSSRuleset(`${className} .ad-btn:hover`, props.buttonHover, true) : '';

	return (
		<>
			{!!hoverStyle && <style>{hoverStyle}</style>}
			<div className={`ad-align ad-align-${align ? align : 'none'} ad-cta`}>
				<a className={'ad-btn ad-btn-dark'} style={style} href={link}>{text}</a>
			</div>
		</>
	);
}

export default CTA;
