import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { userType, userStatuses } from '@/Constants/usersData';

const UserFilters = ({ onSearchChange, onFilterChange }) => {
  return (
    <div className="dashboard-card p-4 sm:p-6">
      <div className="responsive-search-container">
        <div className="responsive-search-input">
          <input
            type="text"
            placeholder="البحث عن عميل..."
            className="responsive-search-field"
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
        <div className="responsive-filters">
          <select 
            className="responsive-filter-select"
            onChange={(e) => onFilterChange(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>حالة العميل</option>
            {userStatuses.map(status => (
              <option key={status.id} value={status.value}>
                {status.name}
              </option>
            ))}
          </select>
          
          <select 
            className="responsive-filter-select"
            onChange={(e) => onFilterChange(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>نوع العميل</option>
            {userType.map(type => (
              <option key={type.id} value={type.value}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserFilters; 