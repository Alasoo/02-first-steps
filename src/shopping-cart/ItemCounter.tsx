//rafc
import React from 'react'

interface Props {
    name: string;
    quantity: number;
}

export const ItemCounter = ({ name, quantity }: Props) => {
    return (
        <section style={
            {
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginTop: '10px',
            }
        }>
            <p>{name}</p>
            <button>+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    )
}

