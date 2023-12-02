import {ComponentProps, Props} from './types';
import Default from './variations/Default';
import Left from './variations/Left';
import Simple from './variations/Simple';
import Container from './Container';

const Ad = (props: ComponentProps) => {
	return (
		<Container {...props}>
			{props.attributes.variation === 'default' && <Default {...props} />}
			{props.attributes.variation === 'left' && <Left {...props} />}
			{props.attributes.variation === 'simple' && <Simple {...props} />}
		</Container>
	);
}

export default Ad;
