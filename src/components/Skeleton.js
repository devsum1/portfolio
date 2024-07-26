// Skeleton.js
import React from 'react';

const Skeleton = ({ width, height, borderRadius = 'md' }) => {
    return (
        <div
            className={`bg-gray-200 animate-pulse ${borderRadius} ${width} ${height}`}
        ></div>
    );
};

export default Skeleton;
