import React from 'react';
import {RangeControl} from '@wordpress/components';
import {useState} from '@wordpress/element';

import {ControlHeader, UnitRangeControl} from "wpx";

type ImageWidthControlProps = {
	title: string;
	value: number | undefined;
	onChange: (value: number | undefined) => void;
}

const ImageWidthControl = (props: ImageWidthControlProps) => {
	const [isLinked, setIsLinked] = useState(false);
	const [isAdvanced, setIsAdvanced] = useState(false);

    return (
        <>
            <ControlHeader
                title={ props.title }
                hint={ '' }
                isAdvanced={ isAdvanced } onAdvancedChange={ setIsAdvanced }
                onClear={ () => props.onChange(undefined) }
            />
            { isAdvanced ?
                <UnitRangeControl
                    onChange={ value => {
						props.onChange(value ? parseInt(value) : undefined)
					} }
                    value={ props.value ? props.value.toString() : undefined }
                /> :
                <RangeControl
                    max={ 512 }
                    min={ 24 }
                    onBlur={ function noRefCheck() {
                    } }
                    onChange={ props.onChange }
                    onFocus={ function noRefCheck() {
                    } }
                    onMouseLeave={ function noRefCheck() {
                    } }
                    onMouseMove={ function noRefCheck() {
                    } }
                    step={ 1 }
                    withInputField={ false }
                    value={ props.value }
                />
            }
        </>
    );
};

export default ImageWidthControl;
