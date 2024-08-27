import { products } from "../data/products";

export default function Lists() {
  return (
    <div>
      <h1>List</h1>

      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div style={{ width: "25%" }} key={product.id}>
            <img src={product.image} alt=""  style={{ width: '100%', height: "200px" }}/>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
