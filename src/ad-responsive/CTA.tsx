import {CSSProperties} from 'react';

import {ComponentProps, Props} from './types';
import {buildCSSRuleset} from '../_common/style';
import classNames from 'classnames';

function isNotEmpty(button: Partial<Props['attributes']['button']>) {
	return button.colorHover || button.backgroundColorHover;
}

function parseHoverStyles(style: CSSProperties & {[key: string]: any}) {
	const hover = {} as CSSProperties & {[key: string]: any};
	const rest = {} as CSSProperties & {[key: string]: any};
	for (const property in style) {
		if (property.endsWith('Hover')) {
			hover[property] = style[property];
		} else {
			rest[property]  = style[property];
		}
	}
	return [hover, rest]
}

const CTA = (props: ComponentProps) => {

	const [hoverStyle, rest] = parseHoverStyles(props.attributes.button);
	const {align, text, link, ...style} = rest;
	const selectors = `.ad-responsive-${props.attributes.instanceId}`;

	const inlineStyle = isNotEmpty(hoverStyle) ? buildCSSRuleset(`${selectors} .ad-btn:hover`, hoverStyle, true) : '';

	const className = classNames('ad-align', `ad-align-${align ? align : 'none'}`,  'ad-cta', {
		'ad-focused': props.focused === 'button'
	})

	return (
		<>
			{!!inlineStyle && <style>{inlineStyle}</style>}
			<div className={className}>
				<a className={'ad-btn ad-btn-dark'} style={style} href={link}>{text}</a>
			</div>
		</>
	);
}

export default CTA;
