import Icon from '../Icon';
import Image from '../Image';
import Content from '../Content';
import CTA from '../CTA';
import {Props} from '../types';

const Default = (props: {attributes: Props['attributes'], setAttributes?: Props['setAttributes']}) => {
	const save = !props.setAttributes;

	return (
		<>
			<div className="ad-main">
				<Icon attributes={props.attributes} />
				<Content {...props}>
					<CTA {...props.attributes} />
				</Content>
			</div>
			<Image attributes={props.attributes} edit={!save}/>
		</>
	);
}

export default Default;
