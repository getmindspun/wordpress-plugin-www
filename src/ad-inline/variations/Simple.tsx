import Icon from '../Icon';
import Content from '../Content';
import CTA from '../CTA';
import {Props} from '../types';

const Simple = (props: {
	attributes: Props['attributes'],
	setAttributes?: Props['setAttributes'],
	focused?: Record<string, boolean>
}) => {
	return (
		<>
			<div className="ad-main">
				<Icon attributes={props.attributes} focus={props.focused?.icon} />
				<Content {...props} />
			</div>
			<CTA {...props.attributes} />
		</>
	);
}

export default Simple;
