import {Props} from './types';

const Icon = (props: {media: Props['attributes']['icon']}) => {

	if (!props.media.url) {
		return null;
	}

	return (
		<div className="ad-icon">
			<img
				id={ props.media.id ? props.media.id : undefined }
				src={ props.media.url }
				alt={ props.media.alt }
			/>
		</div>
	);
}

export default Icon;
