import { generateCSS } from '../../../../bpl-tools/Advanced/generateCSS';
import { isValidCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id, isBackend = false }) => {
	const { layout, advanced } = attributes;
	const { alignment } = layout || {};

	return <style dangerouslySetInnerHTML={{
		__html: `
		${generateCSS(id, advanced, isBackend)}

		#${id}{
			${isValidCSS('text-align', alignment)}
		}
	`}}
	/>
}
export default Style;