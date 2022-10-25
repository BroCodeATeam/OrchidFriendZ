import React, { useRef } from 'react'

export default function PhotoQue({ props }) {

    const el = useRef(null)

    return (
        <div className={`container my-4`}>
            <div className={`photoque`} ref={el}>
                {props.imageData.map((it, index) => {
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${it})` }}
                        className={`photoque-item`}
                    />
                })}
            </div>
        </div>
    );
};