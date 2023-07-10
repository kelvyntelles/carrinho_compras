import { useContext } from "react";

import { 
    Container, 
    Content,  
    Tabela,
    AreaImagem,
    AreaInformacoes,
    AreaLixeira,
    CardProduto,
    FinalizarPedido,
    CarrinhoVazio
} from "./styles";

import { ImBin } from 'react-icons/im'
import { CartContext } from "../../App";

export function Cart() {
    const {products, removeProductCart} = useContext(CartContext)

    function valorTotal () {
        let total = 0

        for(let i = 0; i < products.length; i++) {
            total += products[i].price 
        }

        return total
    }

    return (
        <Container>
            <Content>
                { products.length >= 1 ? (
                    <Tabela>
                        {products.map((produto) => (
                            <CardProduto key={produto.id}>
                                <AreaImagem>
                                    <img src={produto.imageUrl} alt="" />
                                </AreaImagem>
                                <AreaInformacoes>
                                    <span>{produto.title}</span>
                                    <strong>
                                        { new Intl.NumberFormat('pt-BR', 
                                            { style: 'currency', currency: 'BRL' }
                                        ).format(produto.price) }
                                    </strong>
                                </AreaInformacoes>
                                <AreaLixeira>
                                    <button onClick={() => removeProductCart(produto.id)}>
                                        <ImBin color="#8a2be2" size={28} />
                                    </button>
                                </AreaLixeira>
                            </CardProduto>
                        ))}
                        <FinalizarPedido>
                            <button>FINALIZAR PEDIDO</button>

                            <div>
                                <span>TOTAL</span>
                                <strong>
                                    { new Intl.NumberFormat('pt-BR', 
                                        { style: 'currency', currency: 'BRL' }
                                    ).format(valorTotal()) }
                                </strong>
                            </div>
                        </FinalizarPedido>
                    </Tabela>
                ) : (
                    <CarrinhoVazio>
                        <h1>Carrinho está vazio!</h1>
                    </CarrinhoVazio>
                ) }
            </Content>
        </Container>
    )
}