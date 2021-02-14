import './Square.css';
import {useState} from 'react';

export function Square(props) {
    const [entry, updateEntry] = useState(-1);
    const row = props.row;
    const col = props.col;
    const subSquare = props.subSquare;

    return (
        <div>
            <div className='square'>
                <p>test</p>
            </div>
        </div>
        )
}
