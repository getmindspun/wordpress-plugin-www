import Icon from '../Icon';
import Image from '../Image';
import Content from '../Content';
import CTA from '../CTA';
import {Props} from '../types';

const Left = (props: {attributes: Props['attributes'], setAttributes?: Props['setAttributes']}) => {
	const save = !props.setAttributes;

	return (
		<>
			<Image attributes={props.attributes} edit={!save}/>
			<div className="ad-main">
				<Icon attributes={props.attributes} />
				<Content {...props}>
					<CTA {...props.attributes} />
				</Content>
			</div>
		</>
	);
}

export default Left;
