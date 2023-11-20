import {Props} from './types';
import {ReactComponent as NoImage} from './icons/no-image.svg';

const Image = (props: {attributes: Props['attributes']} & {edit?: boolean, focus: boolean|undefined}) => {

	const {url, alt, id, height, width, scaledWidth, show, ...style} = props.attributes.media;

	if (!props.edit && !url) {
		return null;
	}

	const scaledHeight = scaledWidth && width && height ? Math.round(scaledWidth * height / width ) : undefined;

	return (
		<div className={`ad-img ad-show-${show ? show : 'always'}` + (props.focus ? ' ad-focused' : '')}>
			{ !!url ?
				<img
					id={ id ? id : undefined}
					src={ url }
					alt={ alt }
					width={ width }
					height={ height }
					style={ {...style, width: scaledWidth, height: scaledHeight} }
				/> :
				<NoImage />
			}
		</div>
	);
}

export default Image;
