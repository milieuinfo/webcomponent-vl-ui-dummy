import {vlElement, define} from 'vl-ui-core';

/**
 * VlDummy
 * @class
 * @classdesc
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-dummy/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-dummy/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-dummy.html|Demo}
 *
 */
export class VlDummy extends vlElement(HTMLElement) {}

define('vl-dummy', VlDummy);

