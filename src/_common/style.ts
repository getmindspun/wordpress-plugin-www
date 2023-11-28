import {paramCase} from 'change-case';

function propertyName(property: string) {
	property = paramCase(property);
	if (property.endsWith('-hover')) {
		property = property.substring(0, property.length - 6);
	}
	return property;
}

export function buildCSSRuleset(selectors: string, style: { [key: string]: string | number | undefined }, important: boolean = false) {
    const declarations: string[] = [];
    for (const property in style) {
        const value = style[property];
        if (value !== undefined) {
            let declaration = `${ propertyName(property) }:${ value }`;
			if (important) {
				declaration += ' !important'
			}
            declarations.push(declaration);
        }
    }
    return `${ selectors } {${ declarations.join(';') }}`;
}
