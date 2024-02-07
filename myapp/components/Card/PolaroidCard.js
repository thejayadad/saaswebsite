
import React from 'react';

const PolaroidCard = ({ imageUrl, title, description }) => {
    return (
        <div className="bg-gray-200 dark:bg-white dark:text-gray-700 p-4 rounded-lg">
            <img src={imageUrl} alt={title} className="polaroid-card-image" />
            <div className="polaroid-card-info">
                <h2 className="polaroid-card-title">{title}</h2>
                <p className="polaroid-card-description">{description}</p>
            </div>
        </div>
    );
};

export default PolaroidCard;
