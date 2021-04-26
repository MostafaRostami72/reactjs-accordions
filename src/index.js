import React from 'react'
import Accordion from "./components/accordion";
import './styles.scss'

const ReactAccordion = ({items = [], className}) => {
    return (
        <div className={"rs-accordion " + (className ?? '')}>
            {
                items.map((item, key) =>
                    <Accordion
                        itemKey={key}
                        title={item.title}
                        content={item.caption}
                    />
                )
            }
        </div>
    )
};

export default ReactAccordion;
