import {Props} from './types';
import {__experimentalInputControl as InputControl, SelectControl} from '@wordpress/components';
import {InspectorControls, MediaPlaceholder} from '@wordpress/block-editor';

const Controls = (props: Props) => {

	const setImageAttributes = (media: Props['attributes']['media']) => {
		if (!media || !media.url) {
			props.setAttributes({
				media: {
					url: undefined,
					id: undefined,
					alt: undefined
				}
			});
			return;
		}
		props.setAttributes({media});
	};

	return (
		<InspectorControls>
			<div className="wp-block-www-ad-inline-controls">
				<div className="cta-button-controls">
					<InputControl
						label="Button Text"
						labelPosition="top"
						value={props.attributes.button.text}
						onChange={(text: string | undefined) => {
							const button = {...props.attributes.button, text: text || ''};
							props.setAttributes({button});
						}}
					/>
					<InputControl
						label="Button Link"
						labelPosition="top"
						value={props.attributes.button.link}
						onChange={(link: string | undefined) => {
							const button = {...props.attributes.button, link: link || '#'};
							props.setAttributes({button});
						}}
					/>
				</div>
				<div className="variant-controls">
					<SelectControl
						label={"Variation"}
						options={ [
							{ label: 'Default', value: 'default' },
							{ label: 'Left Image', value: 'left' },
						] }
						value={props.attributes.variation}
						onChange={text => props.setAttributes({variation: text as Props['attributes']['variation']})}
						/>
				</div>
				<div className="media-controls">
					<MediaPlaceholder
						accept="image/*"
						allowedTypes={['image']}
						onSelect={media => setImageAttributes(media as unknown as Props['attributes']['media'])}
						multiple={false}
						onHTMLDrop={ () => {} }
					/>
				</div>
			</div>
		</InspectorControls>
	);
}

export default Controls;
