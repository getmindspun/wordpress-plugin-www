import {Props} from './types';
import {InspectorControls, MediaPlaceholder} from '@wordpress/block-editor';

// https://kjmonahan.dev/gutenberg-image-block/

const Controls = (props: Props) => {

	const setMobile = (media: Props['attributes']['mobile']) => {
		if (!media || !media.url) {
			props.setAttributes({
				mobile: {
					url: undefined,
					id: undefined,
					alt: undefined
				}
			});
			return;
		}
		props.setAttributes({mobile: media});
	};

	const setHorizontal = (media: Props['attributes']['mobile']) => {
		if (!media || !media.url) {
			props.setAttributes({
				mobile: {
					url: undefined,
					id: undefined,
					alt: undefined
				}
			});
			return;
		}
		props.setAttributes({horizontal: media});
	};

	return (
		<InspectorControls>
			<div className="wp-block-www-ad-images-controls">
				<div className="media-controls">
					<MediaPlaceholder
						labels = { { title: 'Horizontal Banner (728×90)' } }
						accept="image/*"
						allowedTypes={['image']}
						onSelect={media => setHorizontal(media as unknown as Props['attributes']['mobile'])}
						multiple={false}
						onHTMLDrop={ () => {} }
					/>
				</div>
				<div className="media-controls">
					<MediaPlaceholder
						labels = { { title: 'Large Mobile (320x100)' } }
						accept="image/*"
						allowedTypes={['image']}
						onSelect={media => setMobile(media as unknown as Props['attributes']['horizontal'])}
						multiple={false}
						onHTMLDrop={ () => {} }
					/>
				</div>
			</div>
		</InspectorControls>
	);
}

export default Controls;
