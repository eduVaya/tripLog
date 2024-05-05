import React from 'react';

export default ({ open, children }) => {
    if (!open) return null;

    return (
        <div className='modal--overlay'>
            <div className='modal'>
                {children}
            </div>

        </div>
    )
}