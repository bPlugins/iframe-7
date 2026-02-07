import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { blockIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: blockIcon,

	// Build in Functions
	edit: Edit,

	save: () => null,
});
