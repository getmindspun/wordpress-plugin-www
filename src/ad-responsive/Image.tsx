import classNames from 'classnames';

import {ComponentProps} from './types';
import {ReactComponent as NoImage} from './icons/no-image.svg';
import Style from './Style';

const Image = (props: ComponentProps) => {
	const {url, alt, id, height, width, scaledWidth, show, ...style} = props.attributes.media;

	if (!props.edit && !url) {
		return null;
	}

	const className = classNames('ad-img', `ad-show-${show ? show : 'always'}`, {
		'ad-focused': props.focused === 'image'
	})
	const scaledHeight = scaledWidth && width && height ? Math.round(scaledWidth * height / width) : undefined;

	return (
		<>
			{props.edit && <Style
				blockId={props.attributes.blockId}
				selector={'.ad-img'}
				attributes={style}
			/>}

			<div className={className}>
				{!!url ?
					<img
						id={id ? id : undefined}
						src={url}
						alt={alt}
						width={width}
						height={height}
						style={{width: scaledWidth, height: scaledHeight}}
					/> :
					<NoImage/>
				}
			</div>
		</>
	);
}

export default Image;
