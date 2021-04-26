import React from 'react';

export default function Props() {
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
                    <td>items</td>
                    <td>required</td>
                    <td>Array</td>
                    <td>set items for accordion</td>
                </tr>

                <tr>
                    <td>className</td>
                    <td>nullable</td>
                    <td>String</td>
                    <td>set className for accordion main div.</td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}
