import React from "react";

export default function Filter({ onSort, onFilter, types }) {
    return (
        <div>
            <select onChange={(e) => onSort(e.target.value)}>
                <option value="">Sort by...</option>
                <option value="name">Company</option>
                <option value="price">Price</option>
            </select>
            <select onChange={(e) => onFilter(e.target.value)}>
                <option value="">Filter by...</option>
                {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    );
}