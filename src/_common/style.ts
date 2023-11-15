import {paramCase} from 'change-case';

export function buildCSSRuleset(selectors: string, style: { [key: string]: string | number | undefined }) {
    const declarations: string[] = [];
    for (const property in style) {
        const value = style[property];
        if (value !== undefined) {
            const declaration = `${ paramCase(property) }:${ value }`;
            declarations.push(declaration);
        }
    }
    return `${ selectors } {${ declarations.join(';') }}`;
}