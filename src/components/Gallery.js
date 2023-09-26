import image from '../assets/404Error.png'
const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const Gallery = () => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {images.map((el, index) => (
                    <li key={index}>
                        <img src={image} alt="logo" />
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default Gallery;