import {ComponentProps} from './types';
import classNames from 'classnames';
import Style from './Style';

const CTA = (props: ComponentProps) => {
	const className = classNames('ad-cta', {
		'ad-focused': props.focused === 'button'
	})

	return (
		<>
			{props.edit && <Style
				blockId={props.attributes.blockId}
				selector={'.ad-btn'}
				attributes={props.attributes.button}
			/>}
			<div className={className}>
				<a className={'ad-btn ad-btn-dark'} href={props.attributes.button.link}>{props.attributes.button.text}</a>
			</div>
		</>
	);
}

export default CTA;
