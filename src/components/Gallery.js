import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";


const Gallery = ({ loading, images, changeQuery, query}) => {
    console.log("length", !images)
    console.log("images", images)
    const {search }= useParams();
    console.log("params", search)
    console.log("query}", query)

    // useEffect(() => {
    //     console.log("params inside", search)
    // // if (search) changeQuery(search ? search : query)
    // changeQuery(search)
    // }, [search])
    useEffect(() => {
        console.log("params inside", search)
    // if (search) changeQuery(search ? search : query)
    if (search) {
         changeQuery(search)
    }
   
    },[search, changeQuery])

console.log("gallery", images)
    return (
        <div className="photo-container">
            {loading ? (
                <h2> Loading ... </h2>
            ) : !loading && images?.length ? (
                <>
                    <h2>{search? search : query}</h2>
                    <ul>
                        {images.map((image) => (
                            <li key={image.id}>
                                <img src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`} alt={`${image.ttile}`} />
                            </li>
                        )
                        )}
                    </ul>
                </>
            ) : (
                < NotFound title="No Results Found" info="You search did not return any results. Please try again." />
            )}
        </div>
    )
}

export default Gallery;