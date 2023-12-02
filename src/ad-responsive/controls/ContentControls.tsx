import {
	BlockAlignResponsiveControl,
	ColorControl,
	ColorsGroup,
	ContainerContents,
	ContainerControl
} from 'wpx';

import {Props} from '../types';

const ContentControls = (props: Props & {
	setFocused: (value: string|null) => void;
}) => {
	return (
		<ContainerControl
			title={'Content'}
			onMouseEnter={() => props.setFocused('content')}
			onMouseLeave={() => props.setFocused(null)}
		>
			<ContainerContents>
				<ColorsGroup>
					<ColorControl
						title={ 'Color' }
						value={ props.attributes.content.color }
						onChange={ (color: string | undefined) => {
							/* Intentionally set the color to the empty string when undefined
							 * otherwise setAttributes won't recognize it.
							 */
							const content = {...props.attributes.content, color: color ? color : ''}
							props.setAttributes({content});
						} }
					/>
				</ColorsGroup>
				<BlockAlignResponsiveControl
					label={'Alignment'}
					options={['left', 'center', 'right', 'full']}
					attributes={props.attributes.content}
					setAttributes={ attributes => {
						const content = {...props.attributes.content, ...attributes};
						props.setAttributes({content});
					}}
				/>
			</ContainerContents>
		</ContainerControl>
	);
}

export default ContentControls;
