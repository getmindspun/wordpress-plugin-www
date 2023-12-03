import Icon from '../Icon';
import Content from '../Content';
import CTA from '../CTA';
import {Props} from '../types';

const Simple = (props: {
	attributes: Props['attributes'],
	setAttributes?: Props['setAttributes'],
	focused?: string|null
}) => {
	return (
		<>
			<div className="ad-main">
				<Icon {...props} />
				<Content {...props} />
			</div>
			<CTA {...props}/>
		</>
	);
}

export default Simple;
