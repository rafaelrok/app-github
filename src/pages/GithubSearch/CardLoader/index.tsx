import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = () => (
    <div className="card-loader-container">
        <ContentLoader viewBox="0 0 300 280" height={280} width={300}>
            <rect x="0" y="0" rx="10" ry="10" width="280" height="180" />
        </ContentLoader>
    </div>
)

export default CardLoader