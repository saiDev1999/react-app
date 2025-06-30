









const  SearchBarComponent = ({searchQuery, setSearchQuery}) =>{
    
    const onChangeHandler = (event) =>{
        setSearchQuery(event.target.value)
    }

    return (
        <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
            <input type="text" placeholder="Search" value={searchQuery} onChange={onChangeHandler}    />
        </div>
    )
}

export default SearchBarComponent;