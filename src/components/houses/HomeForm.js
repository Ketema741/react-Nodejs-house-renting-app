import React, { useContext, useEffect, useReducer, useState } from 'react'
import HouseContext from '../../context/house/houseContext';
import '../../css/HouseForm.css';

const HomeForm = () => {

    const initialState = {
        realtor:null,
        title: '',
        description: "",
        location: "",
        area: null,
        rooms: null,
        price: null,
        propertyType: "",
        garage: null,
        yearBuilt:null,
      };

      const [house, setHouse] = useState(initialState);
      const houseContext = useContext(HouseContext)
    
      
    
      const { 
        realtor,
        title,
        description,
        location,
        area,
        rooms,
        price,
        propertyType,
        garage,
        yearBuiltrealtor,
       } = house;

     
    
    
        // add contact 
        const onSubmit = (e) => {
            e.preventDefault();
           
          };
    
    
        

  return (
    <div className="container">
        <header className="header">
            <h3 className="heading-3">Your own home:</h3>
            <div className="header__seenon-text">cozzy home</div>
            <h1 className="heading-1">The ultimate personal freedom</h1>
        </header>
        <div className="story__pictures">
            <img src="img/realtor-3.jpeg" alt="Couple with new house" className="story__img--2" style={{height:"350px"}} />
            <img src="img/story-2.jpeg" alt="New house" className="story__img--1" />
        </div>

        <div className="story__content">
            <h3 className="heading-3 mb-sm">Welcome To Admin Page</h3>
            <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best Leader&rdquo;</h2>
            <p className="story__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
            </p>
            <button className="btn">Ketema Girma</button>
        </div>    
        <section className="add">
            <div className="section-login">
                <div className="row">
                    <div className="login">
                        <div className="login__form">
                            <form className="form" >
                                <input type="text" className="form__input" placeholder="House title" name="title" id="title" required />
                                <label for="name" className="form__label">House Name</label>
                            
                                <input type="text" className="form__input" placeholder="image " name="image" id="image" required />
                                <label for="name" className="form__label">image</label>
                                <input type="text" className="form__input" placeholder="Location" name="location" id="location" required />
                                <label for="name" className="form__label">Location</label>
                            
                                <input type="text" className="form__input" placeholder="Rooms " name="rooms" id="rooms" required />
                                <label for="name" className="form__label">Rooms</label>
                                <input type="text" className="form__input" placeholder="Area " name="area" id="area" required />
                                <label for="name" className="form__label">Area</label>
                                <input type="text" className="form__input" placeholder="Price " name="price" id="price" required />
                                <label for="name" className="form__label">Price</label>
                                <input type="submit"  value="Add" name="add" className="btn btn--green" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
            
        <section className="homes" id="home">
            <div className="home">
                <img src="" alt="" className="home__img" />
                
                <h5 className="home__name">($house['house_title'])</h5>
                <div className="home__location">
                   
                    <p>($house['house_location'])</p>
                </div>
                <div className="home__rooms">
                    
                    <p>($house['house_rooms'])rooms</p>
                </div>
                <div className="home__area">
                   
                    <p>($house['house_area']) m<sup>2</sup></p>
                </div>
                <div className="home__price">
                    
                    <p>($house['house_price'])</p>
                </div>
                <form >
                    <input className="btn home__btn" type="hidden" name="id_to_delete" value="" />
                    <input className="btn home__btn" type="submit" name="delete" value="Delete"  />
                </form>
            </div>

        </section>
    </div>
  )
}

export default HomeForm
