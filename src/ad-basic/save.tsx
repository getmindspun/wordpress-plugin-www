import {useBlockProps} from '@wordpress/block-editor';
import {Props} from "./types";
import {ReactComponent as Icon} from "./icons/mindspun-icon.svg";
import CTA from "./CTA";
import React from "react";

export default function save(props: {attributes: Props['attributes']}) {
	return (
		<div { ...useBlockProps.save() }>
			<div className="ad-main">
				<div className="ad-icon">
					<Icon/>
				</div>
				<div className="ad-content">
					<h2>{ props.attributes.h2 }</h2>
					<h3>{ props.attributes.h3 }</h3>
				</div>
			</div>
			<CTA {...props.attributes.button} />
		</div>
	);
}
