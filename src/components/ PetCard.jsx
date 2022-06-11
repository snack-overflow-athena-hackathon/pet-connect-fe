export const PetCard = ({pet_name, description, img_url, owner}) => {
    
    return (
        <li key={pet_name}>
            <h2>{pet_name}</h2>
            <p>Description: {description}</p>
            <img src={img_url} alt={pet_name} />
            <p>Belongs to: {owner}</p>
        </li>
    )
}