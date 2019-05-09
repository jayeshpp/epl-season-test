import React from 'react';

export class Table extends React.Component {

    render() {


        const Rows = (props) => {
            return (
                <tr>
                    <td>fdfs</td>
                </tr>
            )
        }

        return (
            <div>
                <table>
                    <thead>
                        <th>Teams</th>
                        <th>Total Matches</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Ties</th>
                        <th>Total Goals Scored For</th>
                        <th>Total Goals Scored Against</th>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>
        )
    }
}