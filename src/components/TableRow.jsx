import TableCell from "./TableCell";

const TableRow = ({flight}) => {
    const words = Object.values(flight)
    
    return (
        <tr>
            <td>{'\u2708'}</td>
            {words?.map((word, _index) => (
                <TableCell key = {_index} word = {word} />
            ))}
        </tr>
    )
  }
  
  export default TableRow;
  