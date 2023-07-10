import { useEffect, useState } from "react";
import { Product } from "../../components/Product";
import { Container, Content } from "./styles";
import api from "../../services/api";

interface ProductProps {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
}

export function Home() {
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        api
          .get("/products")
          .then(function (response) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            setProducts(response.data)
          })
          .catch(() => {
            console.error("ops! ocorreu um erro");
        });
    }, []);

    return (
        <Container>
            <Content>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id} 
                        imageUrl={product.imageUrl}
                        title={product.title}                   
                        price={product.price}
                    />
                ))}
            </Content>
        </Container>
    )
}
