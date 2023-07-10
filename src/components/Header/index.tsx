import { HeaderContainer, HeaderContent } from "./styles";
import { GiRunningShoe } from 'react-icons/gi'
import { CgShoppingBag } from 'react-icons/cg'
import { useContext } from "react";
import { CartContext } from "../../App";
import { Link } from "react-router-dom";

export function Header() {
    const {products} = useContext(CartContext)

    return (
        <HeaderContainer>
            <HeaderContent>
                <span><Link to="/">KTSHOES</Link><GiRunningShoe /></span>

                <div>
                    <Link to="/cart">
                    <div>
                        <strong>Meu Carrinho</strong>
                        <span>{products.length} itens</span>
                    </div>
                    </Link>
                    <CgShoppingBag size={24} />
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}
