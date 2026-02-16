import styles from '../styles/Products.module.css'
export async function getServerSideProps(){
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();
    return{
        props:{
            products:data.products,
        },
    };
}

export default function Products({products}){
    return(
        <div className={styles.products}>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.slice(0,10).map(({id,title,category,description,price},i)=>(
                        <tr key={i}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{category}</td>
                            <td>{description}</td>
                            <td>{price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}