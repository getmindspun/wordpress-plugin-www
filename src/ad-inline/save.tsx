import {useBlockProps} from '@wordpress/block-editor';
import {ReactComponent as Image} from "./icons/no-image.svg";
import {Props} from "./types";
import React from "react";

export default function save(props: {attributes: Props['attributes']}) {
	const blockProps = useBlockProps.save({
		className: `variation-${props.attributes.variation}`
	})

	return (
		<div { ...blockProps }>
			<div className="ad-main">
				<div className="ad-content">
					<h2>{ props.attributes.h2 }</h2>
					<h3>{ props.attributes.h3 }</h3>
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
