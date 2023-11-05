import {RichText, useBlockProps} from '@wordpress/block-editor';
import './editor.scss';
import {ReactComponent as Image} from "./icons/no-image.svg";
import {Props} from "./types";
import Controls from "./Controls";

export default function Edit(props: Props) {

	return (
		<div { ...useBlockProps() }>
			<Controls {...props} />
			<div className="ad-main">
				<div className="ad-content">
					<RichText
						tagName="h2"
						onChange={ (h2: string) => props.setAttributes( {h2}) }
						value={ props.attributes.h2 }
					/>
					<RichText
						tagName="h3"
						onChange={ (h3: string) => props.setAttributes( {h3}) }
						value={ props.attributes.h3 }
					/>
					<a className="ad-btn ad-btn-link" href={props.attributes.button.link}>{props.attributes.button.text}</a>
				</div>
			</div>
			<div className="ad-img">
				{ !!props.attributes.media.url ?
					<img
						src={ props.attributes.media.url }
						alt={ props.attributes.media.alt }
					/> :
					<Image />
				}
			</div>
		</div>
	);
}
