import {Props} from './types';
import classNames from 'classnames';

const Icon = (props: {attributes: Props['attributes'], focused?: string|null}) => {

	const {url, alt, id, height, width, scaledWidth, show, ...style} = props.attributes.icon;

	if (!url) {
		return null;
	}

	const className = classNames('ad-icon', `ad-show-${show ? show : 'always'}`, {
		'ad-focused': props.focused === 'icon'
	})
	const scaledHeight = scaledWidth && width && height ? Math.round(scaledWidth * height / width ) : undefined;

	return (
		<div className={className}>
			<img
				id={ id ? id : undefined }
				src={ url }
				alt={ alt }
				width={ width }
				height={ height }
				style={ {...style, width: scaledWidth, height: scaledHeight} }
			/>
		</div>
	);
}

export default Icon;
