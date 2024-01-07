import React from 'react';
import PropTypes from 'prop-types';
import"./CyberGameHub.scss"
export const CyberGameHub = ({image, game}) =>{
    return(
        <div className='section'>
            <div className='section_devices'>
                <div className='section_devices_block'>
                    <nav>
                        {image}
                    </nav>
                </div>
                <h5>{game}</h5>
                <nav>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <g clipPath="url(#clip0_1_143)">
                    <path d="M1.26222 11.974C1.34814 11.988 1.4351 11.9944 1.52211 11.9933L16.3372 11.9933L16.0141 12.1435C15.6984 12.293 15.4111 12.4964 15.1652 12.7446L11.0107 16.8991C10.4635 17.4214 10.3716 18.2616 10.7928 18.8899C11.2831 19.5595 12.2232 19.7048 12.8928 19.2146C12.9469 19.1749 12.9983 19.1317 13.0466 19.0853L20.5593 11.5726C21.1464 10.9861 21.147 10.0348 20.5605 9.44765C20.5601 9.44728 20.5597 9.44685 20.5593 9.44648L13.0466 1.93378C12.459 1.34784 11.5077 1.34916 10.9217 1.93674C10.8756 1.98299 10.8325 2.0322 10.7928 2.08404C10.3716 2.71233 10.4635 3.55258 11.0107 4.0749L15.1577 8.23693C15.3781 8.45762 15.6316 8.64267 15.909 8.78536L16.3597 8.9882L1.6048 8.9882C0.837233 8.9597 0.163813 9.49587 0.0196152 10.2503C-0.113218 11.0695 0.443098 11.8411 1.26222 11.974Z" fill="#00ffff"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_143">
                    <rect width="21" height="21" fill="white" transform="matrix(-1 0 0 -1 21 21)"/>
                    </clipPath>
                    </defs>
                </svg>
                </nav>
       
            </div>
        </div>
    )
}
CyberGameHub.propTypes = {
    image: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
};
export default CyberGameHub;