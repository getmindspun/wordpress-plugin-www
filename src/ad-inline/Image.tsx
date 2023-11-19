import {Props} from './types';
import {ReactComponent as NoImage} from './icons/no-image.svg';

const Image = (props: {attributes: Props['attributes']} & {edit?: boolean}) => {

	const {url, alt, id, height, width, ...style} = props.attributes.media;

	if (!props.edit && !url) {
		return null;
	}

	return (
		<div className="ad-img">
			{ !!url ?
				<img id={ id ? id : undefined} src={ url } alt={ alt } style={style}/> :
				<NoImage />
			}
		</div>
	);
}

export default Image;
