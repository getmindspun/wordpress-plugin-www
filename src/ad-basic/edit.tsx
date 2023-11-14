import {RichText, useBlockProps} from '@wordpress/block-editor';
import './editor.scss';
import {Props} from "./types";
import {ReactComponent as Icon} from "./icons/mindspun-icon.svg";
import Controls from "./Controls";
import CTA from "./CTA";

export default function Edit(props: Props) {

	return (
		<div { ...useBlockProps() } style={props.attributes.container}>
			<Controls {...props} />
			<div className="ad-main">
				<div className="ad-icon">
					<Icon/>
				</div>
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
				</div>
			</div>
			<CTA {...props.attributes.button} />
		</div>
	);
}
