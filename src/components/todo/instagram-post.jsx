import { instagramPost } from "./person"


const InstagramPost =()=>{

    const {image,hasTags,name,description,personTags} =instagramPost



    return (
        <div>
            <h3>{name}</h3>
            <img
        src={image}
        alt="johnson"
        />
{
      hasTags.map((eachHasTag)=>{
        return  <p>{eachHasTag}</p>
      })

}

        
          
        
 <p>{description}</p>
        </div>
    )

}

export default InstagramPost