import React from 'react';
import {isEmpty} from './helper'

let collapseTimeOut = undefined;
const Accordion = ({itemKey, title, content}) => {

    const getElementHeight = (element) => {
        let height = 0;

        element.classList.add('show');
        height = element.scrollHeight;
        element.classList.remove('show');

        return height;
    };

    const handleShowCollapse = (e, id) => {
        if (!isEmpty(e.target)) {
            const accordion = e.target.closest('.rs-accordion');
            const current = '.c-' + id;
            const allCollapseToggles = accordion.querySelectorAll('.rs-accordion-header');
            const allCollapses = accordion.querySelectorAll('.rs-accordion-body:not(' + current + ')');
            const currentCollapse = accordion.querySelector(current);

            if (allCollapseToggles.length) {
                for (let toggle of allCollapseToggles) {
                    toggle.classList.remove('collapsed');
                }
            }

            if (allCollapses.length) {
                for (let collapseTag of allCollapses) {
                    collapseTag.style.height = 0;

                    setTimeout(() => {
                        collapseTag.classList.remove('show')
                    }, 500)
                }
            }

            if (!isEmpty(currentCollapse)) {
                if (currentCollapse.classList.contains('show')) {
                    currentCollapse.style.height = 0;

                    if (!isEmpty(collapseTimeOut)) {
                        clearTimeout(collapseTimeOut);
                    }

                    collapseTimeOut = setTimeout(() => {
                        currentCollapse.classList.remove('show')
                    }, 500)
                } else {
                    currentCollapse.style.height = getElementHeight(currentCollapse) + 'px';

                    currentCollapse.classList.add('show');
                    e.target.classList.add('collapsed');
                }
            }
        }
    };

    return (
        <div className="rs-accordion-card" key={itemKey}>
            <div className="rs-accordion-header" onClick={(e) => handleShowCollapse(e, itemKey)} role="button">
                {title}

                <span className="rs-accordion-header-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.82 6.64"><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><polyline points="11.29 0.53 5.91 5.89 0.53 0.53" fill="none" stroke="#222" stroke-linejoin="round" stroke-width="1.5"/></g></g></svg>
                </span>
            </div>

            <div className={"rs-accordion-body " + ('c-' + itemKey)}>
                <div className="rs-accordion-content" dangerouslySetInnerHTML={{__html: content}}/>
            </div>
        </div>
    );
};

export default Accordion;
