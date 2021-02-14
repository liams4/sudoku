import './Board.css';
import {Square} from './Square.js';


export function Board() {
    const num_rows = 9;
    const num_cols = 9;

    let rows = [];
    for (let i = 0; i < num_rows; i++) {
        let row = [];
        for (let j = 0; j < num_cols; j++) {
            row.push(<Square row={i} col={j} subSquare={i % 3 + j % 3} />);
        }
        rows.push((<div className='board-row'>
        {row}
        </div>));
    }

    return (
        <div>
            {rows}
        </div>
    )
}
