import {ComponentPropsWithChildren} from './types';
import classNames from 'classnames';
import Style from './Style';

const Container = (props: ComponentPropsWithChildren) => {
	const className = classNames('ad-container', {
		'ad-focused': props.focused === 'container',
		'ad-row-reverse': !!props.attributes.container.reversed,
	});

	return (
		<>
			{props.edit && <Style
				blockId={props.attributes.blockId}
				selector={'.ad-container'}
				attributes={props.attributes.container}
			/>}
			<div className={className}>
				{props.children}
			</div>
		</>
	);
}

export default Container;
