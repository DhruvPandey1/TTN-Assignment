import styles from './productISR.module.css'
export async function generateStaticParams() {
    const data=await fetch('https://dummyjson.com/products');
    const {products}=await data.json();

    return products.map((product)=>({
        id:String(product.id)
    }))
}
export default async function ProductISR({params}) {
    const {id}=await params
    const data=await fetch(`https://dummyjson.com/products/${id}`,{next:{revalidate:60}});
    const product=await data.json();


    return(
        <div className={styles.product}>
            <h2>{product.title}</h2>
            <h2>{product.category}</h2>
            <p>{product.description}</p>
            <span>{product.price}</span>
        </div>
    );
}