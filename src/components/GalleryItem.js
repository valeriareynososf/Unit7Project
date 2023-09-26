import image from '../assets/404Error.png'

const GalleryItem = ({index}) => {
    console.log("index:", index)
    return (
        <li key={index}>
            <img src={image} alt="logo" /> 
        </li>
    )
}

export default GalleryItem;