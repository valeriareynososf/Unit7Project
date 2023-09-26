
const NotFound = ({ title, info }) => {
    return (
        <div>
            <ul>
                <li className="not-found">
                    <h3>{title}</h3>
                    <p>
                        {info}
                    </p>
                </li>
            </ul>
        </div>


    )
}

export default NotFound;