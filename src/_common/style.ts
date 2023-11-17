import {paramCase} from 'change-case';

export function buildCSSRuleset(selectors: string, style: { [key: string]: string | number | undefined }, important: boolean = false) {
    const declarations: string[] = [];
    for (const property in style) {
        const value = style[property];
        if (value !== undefined) {
            let declaration = `${ paramCase(property) }:${ value }`;
			if (important) {
				declaration += ' !important'
			}
            declarations.push(declaration);
        }
    }
    return `${ selectors } {${ declarations.join(';') }}`;
}
