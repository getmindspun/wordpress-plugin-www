import {ComponentProps} from './types';
import classNames from 'classnames';
import Style from './Style';

const Icon = (props: ComponentProps) => {

	const {url, alt, height, width, scaledWidth, show, ...style} = props.attributes.icon;

	if (!url) {
		return null;
	}

	const className = classNames('ad-icon', `wp-image-${props.attributes.blockId}`, `ad-show-${show ? show : 'always'}`, {
		'ad-focused': props.focused === 'icon'
	})

	// https://stackoverflow.com/a/53065007
	return (
		<>
			{props.edit && <Style
				blockId={props.attributes.blockId}
				selector={'.ad-icon'}
				attributes={style}
			/>}
			<div>
				<img
					className={className}
					src={url}
					alt={alt}
					width={width}
					height={height}
					style={{width: props.attributes.icon.scaledWidth, height: props.attributes.icon.scaledHeight}}
				/>
			</div>
		</>
	)
		;
}

export default Icon;
