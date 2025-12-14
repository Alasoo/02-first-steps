import { ItemCounter } from "./shopping-cart/ItemCounter";


interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {
        productName: 'nintendo switch 2',
        quantity: 5
    },
    {
        productName: 'Pro controller',
        quantity: 6
    },
    {
        productName: 'Xbox',
        quantity: 8
    }
]




export const FirstStepsApp = () => {
    return (
        <>
            <h1>Carrito de compra</h1>
            {/* <ItemCounter name="nintendo switch 2" quantity={5} />
            <ItemCounter name="Pro controller" quantity={5} />
            <ItemCounter name="Xbox" quantity={8} /> */}


            {itemsInCart.map(({ productName, quantity }: ItemInCart) => (
                <ItemCounter key={productName} name={productName} quantity={quantity} />
            ))}

        </>
    )
}