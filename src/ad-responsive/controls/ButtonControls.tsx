import {__experimentalInputControl as InputControl} from '@wordpress/components';

import {
	BlockAlignResponsiveControl,
	ColorsGroup,
	ColorControl,
	ContainerContents,
	ContainerControl,
	TabbedContainer,
	TabbedControl
} from 'wpx';

import {Props} from '../types';

const ButtonControls = (props: Props & {
	setFocused: (value: string|null) => void;
}) => {
	return (
		<ContainerControl
			title={'Button'}
			onMouseEnter={() => props.setFocused('button')}
			onMouseLeave={() => props.setFocused(null)}
		>
			<TabbedControl>
				<TabbedContainer key={'Normal'}>
					<ContainerContents>
						<InputControl
							label="Button Text"
							labelPosition="top"
							value={props.attributes.button.text}
							onChange={(text: string | undefined) => {
								const button = {...props.attributes.button, text: text || ''};
								props.setAttributes({button});
							}}
						/>
						<InputControl
							label="Button Link"
							labelPosition="top"
							value={props.attributes.button.link}
							onChange={(link: string | undefined) => {
								const button = {...props.attributes.button, link: link || '#'};
								props.setAttributes({button});
							}}
						/>
						<BlockAlignResponsiveControl
							label={'Alignment'}
							options={['left', 'center', 'right', 'full']}
							attributes={props.attributes.button}
							setAttributes={attributes => {
								const button = {...props.attributes.button, ...attributes};
								props.setAttributes({button});
							}}
						/>
						<ColorsGroup>
							<ColorControl
								title={ 'Color' }
								value={ props.attributes.button.color }
								onChange={ color => {
									const button = {...props.attributes.button, color}
									props.setAttributes({button});
								} }
							/>
							<ColorControl
								title={ 'Background' }
								value={ props.attributes.button.backgroundColor }
								onChange={ backgroundColor => {
									const button = {...props.attributes.button, backgroundColor}
									props.setAttributes({button});
								} }
							/>
						</ColorsGroup>
					</ContainerContents>
				</TabbedContainer>
				<TabbedContainer key={'Hover'}>
					<ContainerContents>
						<ColorsGroup>
							<ColorControl
								title={ 'Color' }
								value={ props.attributes.button.colorHover }
								onChange={ colorHover => {
									const button = {...props.attributes.button, colorHover}
									props.setAttributes({button});
								} }
							/>
							<ColorControl
								title={ 'Background' }
								value={ props.attributes.button.backgroundColorHover }
								onChange={ backgroundColorHover => {
									const button = {...props.attributes.button, backgroundColorHover}
									props.setAttributes({button});
								} }
							/>
						</ColorsGroup>
					</ContainerContents>
				</TabbedContainer>
			</TabbedControl>
		</ContainerControl>
	);
}

export default ButtonControls;
