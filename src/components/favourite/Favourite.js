import React, { useContext, Fragment } from "react";

import Spinner from "../layouts/Spinner";
import { FaMap } from "react-icons/fa";
import { GiHouseKeys } from "react-icons/gi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiFamilyHouse } from "react-icons/gi";


import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import AuthLink from '../layouts/RealtorAuthLink'


import AuthContext from "../../context/realtorAuth/authContext";
import RealtorContext from "../../context/realtor/realtorContext";

const Favourite = () => {
  const realtorContext = useContext(RealtorContext);
  const authContext = useContext(AuthContext);

  const { removeFavourite, favourites } = realtorContext;
  const { realtor } = authContext;

  const removeFromFavouriteHandler = (houseId) => {
    removeFavourite(realtor._id, houseId);
  };

  return (
    <div className="container">
      <AuthLink />
      <Sidebar />
      <div className="header">
        <h1 className="heading-1">User Favourites</h1>
      </div>
      <div className="homes" id="homes">
        {favourites ? (
          <Fragment>
            {favourites.length > 0 ? (
              <Fragment>
                {favourites.map((house) => (
                  <Fragment key={house._id}>
                    <h1 className="heading-1 description">
                      Favourite Listings
                    </h1>
                    <div className="home">
                      <img
                        src={
                          house.houseImages
                            ? house.houseImages[0].url
                            : "/public/img/gal-1.jpeg"
                        }
                        alt={house.title}
                        className="home__img"
                      />

                      <h5 className="home__name">{house.title}</h5>

                      <div className="home__location">
                        <FaMap />
                        <p>{house.location}</p>
                      </div>

                      <div className="home__rooms">
                        <GiFamilyHouse />
                        <p>{house.bed} rooms</p>
                      </div>
                      <div className="home__area">
                        <AiOutlineAreaChart />
                        <p>
                          {house.area} m<sup>2</sup>
                        </p>
                      </div>
                      <div className="home__price">
                        <GiHouseKeys />
                        <p>{house.price} ETB</p>
                      </div>
                      <button
                        onClick={() => removeFromFavouriteHandler(house._id)}
                        className="btn home__btn"
                      >
                        Remove From Favourite
                      </button>
                    </div>
                  </Fragment>
                ))}
              </Fragment>
            ) : (
              <h1 className="heading-1 description">No Favourite Listings</h1>
            )}
          </Fragment>
        ) : (
          <Spinner />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Favourite;
