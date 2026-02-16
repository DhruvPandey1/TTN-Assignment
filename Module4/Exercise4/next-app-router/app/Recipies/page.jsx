import '@/app/Recipies/page.css'
const RecipiesFetch = async (api)=>{
    const res=await fetch(api);
    return res.json();
}
export default  async function Recipies(){
    const {recipes}=await RecipiesFetch("https://dummyjson.com/recipes")
    return(
        <div className="recipies">
            <h2>Recipies</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                       <th>
                            Name
                       </th>
                        <th>
                            Prep Time In Minutes
                        </th>
                        <th>
                            Serving
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {recipes.slice(0,10).map(({id,name,prepTimeMinutes,servings}, i) => (
                        <tr key={i}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{prepTimeMinutes}</td>
                            <td>{servings}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
