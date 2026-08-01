export default function Products({
    name,
    imagePath,
    updateItemCount
}) {

    const handleChange = (event) => {
        const currentValue = event.target.value;
        updateItemCount(name, currentValue);
    }
    return(
        <div style={{textAlign: "center"}}>
            <img
                style={{width:"75%"}}
                src={`http://localhost:3000${imagePath}`}
                alt={`${name} Product`}
            />

            <form style={{marginTop: "10px"}}>
                <label htmlFor={`${name}-quantity`} style={{textAlign: "right"}}>{name}</label>
                <input
                    id={`${name}-quantity`}
                    style={{marginLeft: 7}}
                    type="number"
                    name="quantity"
                    min={0}
                    defaultValue={0}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}
