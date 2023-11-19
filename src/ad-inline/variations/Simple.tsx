import Icon from '../Icon';
import Content from '../Content';
import CTA from '../CTA';
import {Props} from '../types';

const Simple = (props: {attributes: Props['attributes'], setAttributes?: Props['setAttributes']}) => {
	const save = !props.setAttributes;

	return (
		<>
			<div className="ad-main">
				<Icon media={props.attributes.icon} />
				<Content {...props} />
			</div>
			<CTA {...props.attributes} />
		</>
	);
}

export default Simple;
