import styles from '../../styles/product.module.css'
export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
    revalidate: 60,
  };
}

export default function ProductPage({ product }) {
  return (
    <>
      <div className={styles.product}>
        <h2>{product.title}</h2>
        <h3>{product.category}</h3>
        <p>{product.description}</p>
        <span>Price: ${product.price}</span>
      </div>
    </>
  );
}
