import Table from 'react-bootstrap/Table';

function StripedTable(props) {

    const {tableData,headings} =props
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>{headings.heading1}</th>
          <th>{headings.heading2}</th>
          <th>{headings.heading3}</th>
          <th>{headings.heading4}</th>
        </tr>
      </thead>
      <tbody>
       
        {
            tableData.map(eachData=> <tr>
                <td>{eachData.serialNumber}</td>
                <td>{eachData.firstName}</td>
                <td>{eachData.secondName}</td>
                <td>{eachData.userName}</td>
              </tr>)
        }
      </tbody>
    </Table>
  );
}

export default StripedTable;