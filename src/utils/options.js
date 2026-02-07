import { __ } from '@wordpress/i18n';

export const loadTypes = [
	{ label: __('Auto', 'b-iframe'), value: 'auto' },
	{ label: __('Lazy', 'b-iframe'), value: 'lazy' },
	{ label: __('Eager', 'b-iframe'), value: 'eager' }
];

export const alignments = [
	{ label: __('Left', 'b-iframe'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('Center', 'b-iframe'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('Right', 'b-iframe'), value: 'right', icon: 'editor-alignright' }
];