// noinspection JSUnusedGlobalSymbols

import {StoreDescriptor} from '@wordpress/data';

declare global {
    interface Window {
        wpxStore: StoreDescriptor
    }
}
