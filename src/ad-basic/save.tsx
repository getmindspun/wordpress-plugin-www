import {RichText, useBlockProps} from '@wordpress/block-editor';
import {Props} from "./types";
import {ReactComponent as Icon} from "./icons/mindspun-icon.svg";
import CTA from "./CTA";
import React from "react";

export default function save(props: {attributes: Props['attributes']}) {
	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps } style={props.attributes.container}>
			<div className="ad-main">
				<div className="ad-icon">
					<Icon/>
				</div>
				<div className="ad-content">
					<RichText.Content tagName="h2" value={ props.attributes.h2 } />
					<RichText.Content tagName="h3" value={ props.attributes.h3 } />
				</div>
			</div>
			<CTA {...props.attributes.button} />
		</div>
	);
}
