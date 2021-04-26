import React from 'react';

export default function ItemsProps() {
    return (
        <div className="table-responsive">
            <table className="table table-striped ">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Default</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>title</td>
                    <td>required</td>
                    <td>String</td>
                    <td>set title for accordion header</td>
                </tr>

                <tr>
                    <td>caption</td>
                    <td>required</td>
                    <td>String or HTML Tags</td>
                    <td>
                        set caption for accordion content. <br/>
                        You can use HTML Tags Elements in caption like p,a,span,...
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}
