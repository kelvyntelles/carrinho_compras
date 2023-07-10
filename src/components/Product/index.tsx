import { CartContext } from "../../App";
import { Container, ButtonAddCarrinho, ButtonRemoveCarrinho } from "./styles";
import { useContext } from 'react'

interface ProductProps {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
}

export function Product({ id, imageUrl, title, price }: ProductProps) {
    const { addProductCart, products, removeProductCart } = useContext(CartContext)

    const data = {id, imageUrl, title, price}

    function renderButton(idProduct: number) {
        let productInCart = false

        if (products.length === 0) {
            return (
                <ButtonAddCarrinho 
                    onClick={() => addProductCart(
                        data.id,
                        data.title,
                        data.price,
                        data.imageUrl
                    )}>
                    ADICIONAR AO CARRINHO
                </ButtonAddCarrinho>
            )
        } else {
            for(let i = 0; i < products.length; i++) {
                if(idProduct === products[i].id) {
                    productInCart = true
                } 
            }
    
            if(productInCart === false) {
                return (
                    <ButtonAddCarrinho 
                        onClick={() => addProductCart(
                            data.id,
                            data.title,
                            data.price,
                            data.imageUrl
                        )}>
                        ADICIONAR AO CARRINHO
                    </ButtonAddCarrinho>
                )
            } else {
                return (
                    <ButtonRemoveCarrinho
                        onClick={() => removeProductCart(data.id)}
                    >
                        REMOVER DO CARRINHO
                    </ButtonRemoveCarrinho>
                )
            }
        }
    }

    return (
        <Container>
            <img src={imageUrl} alt="" />
            <div>
                <span>{title}</span>
                <strong>
                    { new Intl.NumberFormat('pt-BR', 
                        { style: 'currency', currency: 'BRL' }
                    ).format(price) }
                </strong>
            </div>
            {renderButton(id)}
        </Container>
    )
}