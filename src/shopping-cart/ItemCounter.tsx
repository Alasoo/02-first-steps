//rafc
import { useState } from 'react'


// import './ItemCounter.css'
import style from './ItemCounter.module.css'


interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity = 5 }: Props) => {
    const [count, setCount] = useState(quantity);

    const handleAddClick = () => {
        setCount(count + 1);
        console.log(`Añado uno en ${name}, quantity: ${quantity}`);

    }

    const handleSubtractClick = () => {
        setCount(count - 1);
        console.log(`Quito uno en ${name}, quantity: ${quantity}`);
    }


    return (
        <section
            //className="item-row"
            className={style.itemRow}
        // style={
        //     {
        //         display: 'flex',
        //         alignItems: 'center',
        //         gap: '1rem',
        //         marginTop: '10px',
        //     }}
        >
            <p
                className={style.itemText}
                style={
                    {
                        color: count === 0 ? 'red' : 'black'
                    }
                }
            //className={count === 0 ? style.red : style.black}

            >{name}</p>
            <button onClick={handleAddClick}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubtractClick}>-1</button>
        </section >
    )
}

