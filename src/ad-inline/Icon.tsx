import {Props} from './types';

const Icon = (props: {attributes: Props['attributes'], focus: boolean|undefined}) => {

	const {url, alt, id, height, width, scaledWidth, show, ...style} = props.attributes.icon;

	if (!url) {
		return null;
	}

	const scaledHeight = scaledWidth && width && height ? Math.round(scaledWidth * height / width ) : undefined;

	return (
		<div className={`ad-icon ad-show-${show ? show : 'always'}` + (props.focus ? ' ad-focused' : '')}>
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
