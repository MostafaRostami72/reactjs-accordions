import React from 'react'
import styled from 'styled-components';
import Accordions from 'reactjs-accordions'
import 'reactjs-accordions/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Props from "./props";
import ItemsProps from "./items_props";

const App = () => {
    const items = [
        {title: 'Accordion title 1', caption: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {title: 'Accordion title 2', caption: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {title: 'Accordion title 3', caption: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
        {title: 'Accordion title 4', caption: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'},
    ];

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h1 style={{'fontSize': '32px'}}>React simple accordion</h1>
                    <p className="mt-5">✔️ A useful and simple package to create an react accordion.</p>

                    <Section>
                        <h2>Install</h2>
                        <hr/>
                        <Pre>
                            <code>
                                npm install --save reactjs-accordions
                            </code>
                        </Pre>
                    </Section>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="border px-3 rounded-lg">
                        <Accordions
                            items={items}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <Section>
                    <h2>Usage</h2>
                    <hr/>

                    <div className="mt-3">
                        <h4 className="mb-3">1 - Import component</h4>
                        <Pre>
                            <code className="d-block">
                                import Accordions from 'reactjs-accordions';
                            </code>
                            <code className="d-block">
                                import 'reactjs-accordions/dist/index.css';
                            </code>
                        </Pre>
                    </div>

                    <div className="mt-5">
                        <h4 className="mb-3">2 - Add the component markup to your react component</h4>
                        <Pre>
                            <code>
                                {
                                    'import React from \'react\';\n' +
                                    'import Accordions from \'reactjs-accordions\';\n' +
                                    '\n' +
                                    '\n' +
                                    'const Example = () => {\n\n'+
                                    'const items = [\n' +
                                    '    {title: \'Accordion title 1\', caption: \'Accordion content 1\'},\n' +
                                    '    {title: \'Accordion title 2\', caption: \'Accordion content 2\'},\n' +
                                    '    {title: \'Accordion title 3\', caption: \'Accordion content 3\'},\n' +
                                    '    {title: \'Accordion title 4\', caption: \'Accordion content 4\'},\n' +
                                    '];\n' +
                                    '\n'+
                                    '    \n' +
                                    '    return (\n' +
                                    '        <div className="border px-3 rounded-lg">\n' +
                                    '         <Accordions\n' +
                                    '             items={items}\n' +
                                    '             className=""\n' +
                                    '         />\n' +
                                    '        </div>\n' +
                                    '    );\n' +
                                    '};\n' +
                                    '\n' +
                                    'export default Example;\n'
                                }
                            </code>
                        </Pre>
                    </div>
                </Section>

                <Section>
                    <h2>Props</h2>

                    <div className="mt-3">
                        <Props/>
                    </div>
                </Section>

                <Section>
                    <h2>Accordion items and params</h2>

                    <div className="mt-3">
                        <ItemsProps/>

                        <Pre>
                            <code>
                                {
`
const items = [
    {title: 'Accordion title 1', caption: 'Accordion content 1'},
    {title: 'Accordion title 2', caption: 'Accordion content 2'},
    {title: 'Accordion title 3', caption: 'Accordion content 3'},
    {title: 'Accordion title 4', caption: 'Accordion content 4'},
];
`
                                }
                            </code>
                        </Pre>
                    </div>
                </Section>
            </div>
        </div>
    )
};

export default App

// styles

const Section = styled.div`
    margin: 80px 0;

    @media (max-width: 768px) {
        margin: 56px 0;
    }
`;

export const Pre = styled.pre`
    background-color: #ebebeb;
    font-size: .937rem;
    padding: 12px;
    border-radius: 8px;
`;
