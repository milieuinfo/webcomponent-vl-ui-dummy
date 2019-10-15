import { VlElement } from '/node_modules/vl-ui-core/vl-core.js';

(() => {
    loadScript('util.js', '../node_modules/@govflanders/vl-ui-util/dist/js/util.js', () => {
        loadScript('dummy.js', '../node_modules/@govflanders/vl-ui-dummy/dist/js/dummy.js')
    });
  
    function loadScript(id, src, onload) {
        if (!document.head.querySelector('#' + id)) {
            let script = document.createElement('script');
            script.setAttribute('id', id);
            script.setAttribute('src', src);
            script.onload = onload;
            document.head.appendChild(script);
        }
    }
 })();

/**
 * VlDummy
 * @class
 * @classdesc 
 * 
 * @extends VlElement
 * 
 * @property 
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-dummy/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-dummy/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-dummy.html|Demo}
 * 
 */
export class VlDummy extends VlElement(HTMLElement) {



}

customElements.define('vl-dummy', VlDummy);
