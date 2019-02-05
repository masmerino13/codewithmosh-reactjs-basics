import React, { Component } from 'react';
import _ from 'lodash'

export class TableBody extends Component {
    renderCell = (item, column) => {
        if (column.content) return column.content(item);

        return _.get(item, column.path);
    }

  render() {
      const { columns, data, onRemove, onLike } = this.props;
    return (
        <tbody>
            {
                data.map(item => (
                    <tr key={item._id}>
                        {
                            columns.map((column, key) => <td key={key}>{this.renderCell(item, column)}</td>)
                        }
                    </tr>
                ))
            }
            {
                data.length === 0 && <tr><td colSpan="4" className="text-center font-italic">No data to show</td></tr>
            }
        </tbody>
    )
  }
}

export default TableBody
