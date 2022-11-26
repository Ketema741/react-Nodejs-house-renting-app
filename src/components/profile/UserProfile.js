import React, { Fragment, useContext, useState, useEffect} from 'react'

import Alert from '../layouts/Alerts'
import Footer from '../layouts/Footer'
import Spinner from '../layouts/Spinner'
import SideBar from './SideBar'




import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/realtorAuth/authContext'
import RealtorContext from '../../context/realtor/realtorContext'

import '../../css/Profile.css'

const initialState ={
    name:'',
    email: '',
    password: '',
    password2: '',
    phone: '',
    description: '',
    experienceYear: '',
    location: '',
    specializations: '',
    activityRange: '',
  }
const UserProfile = () => {

  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)
  const realtorContext = useContext(RealtorContext)
  const [currentRealtor, setRealtor] = useState(initialState);
  
    const {  
        name, 
        email, 
        password, 
        phone,
        description,
        experienceYear,
        location,
        specializations,
        activityRange,
    } = currentRealtor;

    const { setAlert } = alertContext
    const { realtor } = authContext
    const { updateRealtor } = realtorContext

    useEffect(() => {
        setRealtor(realtor)
     
    }, [realtor])
    

    const onChange = (e) => setRealtor({ ...currentRealtor, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      if(name === '' || email === '' || phone === '' ){
          setAlert('Please fill all field', 'danger')
      } else {
          updateRealtor(currentRealtor)
      }
    };

  return (
    <div className='profile__container'>
        <SideBar realtor={realtor} />
        <div className="profile__header"> </div>
        <div className="section__update">
            <div className="row">
                <div className="login">
                    <div className="login__form">
                        <Alert />
                        {realtor ? 
                            <Fragment>
                            {realtor.type === 'user' ? 
                            <form className="form" onSubmit={onSubmit}>
                            <input 
                                id='name'
                                type='text'
                                name='name'
                                value={name}
                                onChange={onChange}
                                required
                                className="form__input" 
                                placeholder="full name" 
                            />
                            <label 
                                htmlFor="name" 
                                className="form__label">
                                Name
                            </label>

                            <input 
                                id='email'
                                type='email'
                                name='email'
                                value={email}
                                onChange={onChange}
                                required
                                className="form__input" 
                                placeholder="email" 
                            />
                            <label 
                                htmlFor="email" 
                                className="form__label">
                                Email
                            </label>
                            <input 
                                id="phone" 
                                type="text" 
                                name='phone'
                                value={phone}
                                placeholder="phone" 
                                className="form__input" 
                                onChange={onChange} 
                                required
                            />
                            <label 
                                htmlFor="phone" 
                                className="form__label">
                                phone
                            </label>

                                <input 
                                    id="password" 
                                    type="password" 
                                    name='password'
                                    placeholder="Password " 
                                    className="form__input" 
                                    onChange={onChange} 
                                    minLength='6'
                                />
                                <label 
                                    htmlFor="password" 
                                    className="form__label">
                                    Password
                                </label>
                                
                                <input 
                                id="password2" 
                                type="password" 
                                name='password2'
                                placeholder="Confirm Password " 
                                className="form__input" 
                                onChange={onChange} 
                                minLength='6'
                            />
                            <label 
                                htmlFor="password2" 
                                className="form__label">
                                Confirm Password
                            </label>
                            <input 
                                type="submit"  
                                value="Update" 
                                name="submit" 
                                className="btn btn--green" 
                            />
                            </form>

                            :

                            <form  className="form" onSubmit={onSubmit}>
                                <input 
                                    id='name'
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={onChange}
                                    required
                                    className="form__input" 
                                    placeholder="full name" 
                                />
                                <label 
                                    htmlFor="name" 
                                    className="form__label">
                                    Full Name
                                </label>

                                <input 
                                    id='email'
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                    required
                                    className="form__input" 
                                    placeholder="email" 
                                />
                                <label 
                                    htmlFor="email" 
                                    className="form__label">
                                    Email
                                </label>

                                <input 
                                    id='location'
                                    type='location'
                                    name='location'
                                    value={location}
                                    onChange={onChange}
                                    required
                                    className="form__input" 
                                    placeholder="location" 
                                />
                                <label 
                                    htmlFor="location" 
                                    className="form__label">
                                    Location
                                </label>
                                <input 
                                    id='phone'
                                    type='text'
                                    name='phone'
                                    value={phone}
                                    onChange={onChange}
                                    required
                                    className="form__input" 
                                    placeholder="phone" 
                                />
                                <label 
                                    htmlFor="phone" 
                                    className="form__label">
                                    Phone
                                </label>

                                <input 
                                    id='experienceYear'
                                    type='text'
                                    name='experienceYear'
                                    value={experienceYear}
                                    onChange={onChange}
                                    required
                                    className="form__input" 
                                    placeholder="Experience year" 
                                />
                                <label 
                                    htmlFor="experienceYear" 
                                    className="form__label">
                                    Years of experience
                                </label>

                                <input 
                                    id='specializations'
                                    type='text'
                                    name='specializations'
                                    value={specializations}
                                    onChange={onChange}
                                    required
                                    className="form__input" 
                                    placeholder="Specializations" 
                                />
                                <label 
                                    htmlFor="specializations" 
                                    className="form__label">
                                    Specializations
                                </label>
                                <input 
                                    id='activityRange'
                                    type='text'
                                    name='activityRange'
                                    value={activityRange}
                                    onChange={onChange}
                                    required
                                    className = "form__input" 
                                    placeholder = "activity range" 
                                />
                                <label 
                                    htmlFor="activityRange" 
                                    className="form__label">
                                    Activity Range
                                </label>
                                <input 
                                    id='description'
                                    type='text'
                                    name='description'
                                    value={description}
                                    onChange={onChange}
                                    required
                                    className="form__input" 
                                    placeholder="description" 
                                />
                                <label 
                                    htmlFor="description" 
                                    className="form__label">
                                    Description
                                </label>

                                <input 
                                    id="password" 
                                    type="password" 
                                    name='password'
                                    placeholder="Password " 
                                    className="form__input" 
                                    onChange={onChange} 
                                    minLength='6'
                                />
                                <label 
                                    htmlFor="password" 
                                    className="form__label">
                                    Password
                                </label>
                            
                            <input 
                                id="password2" 
                                type="password" 
                                name='password2'
                                placeholder="Confirm Password " 
                                className="form__input" 
                                onChange={onChange} 
                                minLength='6'
                            />
                            <label 
                                htmlFor="password2" 
                                className="form__label">
                                Confirm Password
                            </label>
                            <input 
                                type="submit"  
                                value="Update" 
                                name="submit" 
                                className="btn btn--green" 
                            />
                            </form>
                        
                            }
                            
                            </Fragment>
                            :
                            <Spinner />
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='profile__footer'>
            <Footer />
        </div>
    </div>
  )
}

export default UserProfile;
