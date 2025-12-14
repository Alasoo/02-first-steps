import type { CSSProperties } from "react";

const firstName = 'David';
const lastName = 'Sánchez';

const favouriteGames = [
    'The Legend of Zelda',
    'Final Fantasy',
    'Metal Gear'
];

const isActive = true;

const address = {
    zipCode: 'Calle falsa 123',
    country: 'España'
};


const myStyle: CSSProperties = {

    backgroundColor: 'red',
    borderRadius: '20px',
    padding: '20px',

}

export function MyAwesomeApp() {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favouriteGames.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p>{JSON.stringify(address)}</p>
            <p
                style={{
                    backgroundColor: 'blue',
                    borderRadius: '20px',
                    padding: '20px',
                }}>
            </p>

            <p style={myStyle}></p>
        </>
    )
}