import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex flex-col justify-center items-center py-28'>
            <span className="loading loading-bars loading-lg bg-success"></span>
        </div>
    );
};

export default LoadingSpinner;