import {Props} from "./types";

const EditImage = (props: { attributes: Props['attributes'], showMobile: boolean }) => {

	if (props.showMobile) {
		if (props.attributes.mobile.url) {
			return (
				<picture>
					<source srcSet={props.attributes.mobile.url}/>
					<img src={props.attributes.mobile.url} alt={props.attributes.mobile.alt}/>
				</picture>
			)
		} else {
			return (
				<picture>
					<source srcSet="https://getmindspun.github.io/public/ads/Large-Mobile-320x100.jpg"/>
					<img src="https://getmindspun.github.io/public/ads/Large-Mobile-320x100.jpg" alt="Mindspun" />
				</picture>
			)
		}
	}


	if (!props.attributes.mobile.url && !props.attributes.horizontal.url) {
		return (
			<picture>
				<source media="(max-width: 479px)" srcSet="https://getmindspun.github.io/public/ads/Large-Mobile-320x100.jpg"/>
				<img src="https://getmindspun.github.io/public/ads/Horizontal-Banner-728x90.jpg" alt="Mindspun"/>
			</picture>
		);
	}

	if (!props.attributes.mobile.url) {
		return (
			<picture>
				<source media="(max-width: 479px)" srcSet="https://getmindspun.github.io/public/ads/Large-Mobile-320x100.jpg"/>
				<img src={props.attributes.horizontal.url} alt={props.attributes.horizontal.alt} />
			</picture>
		)
	}

	if (!props.attributes.horizontal.url) {
		return (
			<picture>
				<source media="(max-width: 479px)" srcSet={props.attributes.mobile.url} />
				<img src="https://getmindspun.github.io/public/ads/Horizontal-Banner-728x90.jpg" alt="Mindspun"/>
			</picture>
		)
	}

	return (
		<picture>
			<source media="(max-width: 479px)" srcSet={props.attributes.mobile.url} />
			<img src={props.attributes.horizontal.url} alt={props.attributes.horizontal.alt} />
		</picture>
	);
}

export default EditImage;
