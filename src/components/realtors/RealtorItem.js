import React from "react";
// import { useNavigate } from 'react-router-dom';

const RealtorItem = ({ realtor }) => {
  // const navigate = useNavigate()

  const {
    name,
    email,
    phone,
    location,
    specializations,
    activityRange,
    realtorImage,
  } = realtor;

  // const handleView = () => {
  // 	getRealtor(_id)
  // 	navigate(`realtors/${_id}`)
  // }

  return (
    <div className="realtor">
      <img
        className="realtor__img"
        src={
          realtorImage && realtorImage[0]
            ? realtorImage[0].url
            : "img/realtor-2.jpg"
        }
        alt="realtor"
      />
      <h4 className="realtor__name">{name}</h4>

      <div className="realtor__contact">
        <h1 className="realtor_desc">{specializations}</h1>
        <ul className="realtor__contact-list">
          <li className="realtor__email ">{email}</li>
          <li className="realtor__phone ">{phone}</li>
        </ul>
      </div>

      <div className="realtor__status">
        <ul className="realtor__status-list">
          <li className="realtor__active">1d ago</li>
          <li className="realtor__location"> {location}</li>
          <li className="realtors__sold">{activityRange} house sold</li>
        </ul>
      </div>
    </div>
  );
};

export default RealtorItem;
