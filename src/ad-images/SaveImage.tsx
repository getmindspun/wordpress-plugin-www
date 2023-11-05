import {Props} from "./types";

const SaveImage = (props: {attributes: Props['attributes']}) => {

	if (!props.attributes.mobile.url && !props.attributes.horizontal.url) {
		return null;
	}

	if (!props.attributes.mobile.url) {
		return (
			<img className="ad-desktop-only"
				src={props.attributes.horizontal.url}
				alt={props.attributes.horizontal.url}
			/>
		)
	}

	if (!props.attributes.horizontal.url) {
		return (
			<img className="ad-mobile-only"
				 src={props.attributes.mobile.url}
				 alt={props.attributes.mobile.url}
			/>
		)
	}

	return (
		<picture>
			<source media="(max-width: 479px)" srcSet={props.attributes.mobile.url} />
			<img src={props.attributes.horizontal.url} alt={props.attributes.horizontal.alt} />
		</picture>
	);
}

export default SaveImage;
