import React from "react";
import "./countrySkeleton.css";

export default function CountrySkeleton() {
    return (
        <div className='col-md-4 mb-4 skeleton'>
            <div className='wraper'>
                <div className='skeleton-img'></div>
                <div className='info'>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}
