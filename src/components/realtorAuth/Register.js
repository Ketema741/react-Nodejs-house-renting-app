import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import CloudinaryUploadWidget from "../cloudinary/CloudinaryUploadWidget";
import Alert from '../layouts/Alerts'

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/realtorAuth/authContext'

import '../../css/login.css'


const Register = (props) => {
    
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)
    const navigate = useNavigate()
    
    const [realtor, setRealtor] = useState(
        {
            name:'',
            email: '',
            password: '',
            password2: '',
            location: '',
            realtorImage: null,
            specializations: '',
            activityRange: '',
            experienceYear: '',
            description: '',
            phone: null
        }
    );
    const [images, setImages] = useState([])
    const [imageToRemove, setImageToRemove] = useState()
    
    const {  
        name, 
        email, 
        password, 
        password2, 
        phone,
        location,
        specializations,
        activityRange,
        experienceYear,
        description,
    } = realtor;

    const { setAlert } = alertContext
    const { removeImage, realtorRegister, error, isRealtorAuthenticated } = authContext

    useEffect(() => {
        if(isRealtorAuthenticated) {
            navigate('/realtordashboard')
        }

        if(error === "realtor already exists") {
            setAlert(error, 'danger')
        }

    // eslint-disable-next-line
    }, [error, isRealtorAuthenticated,  props.history])

    const onChange = (e) => setRealtor({ ...realtor, [e.target.name]: e.target.value });

    const handleOpenWidget = (file) => {
        const { secure_url, public_id } = file
        setImages((prev) => [...prev, {url : secure_url, public_id : public_id}])
        console.log("image uploaded successfully ", secure_url);
    }

    // delete house image
    const handleDelete = (imgObj) => {
        const public_id = imgObj.public_id
        setImageToRemove(public_id)
        removeImage(public_id)
        setImageToRemove(null)
        setImages((prev) => prev.filter((img) => img.public_id !== public_id));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(name === '' || email === '' || password === '' || phone === ''){
            setAlert('Please fill all field', 'danger')
        }
        else if( password !== password2 ) {
            setAlert('password do not much', 'danger')
        } else {
            realtorRegister(realtor, images)
        }
    };
    

    return (
        <div className="login-container" style={style}>
            <header className="login-header">
                <h3 className="heading-3">Your own home:</h3>
                <h1 className="heading-1">The ultimate personal freedom</h1>
                <div className="header__seenon-text">cozzy home</div>
            </header>
            <div className="section-login">
                <div className="row">
                    <div className="login">
                        <div className="login__form">
                            <Alert />
                            <form  className="form" onSubmit={onSubmit}>
                                <CloudinaryUploadWidget handleOpenWidget={handleOpenWidget} />
                                    <div className='img__preview-container'>
                                        {images !== null && images.map((image)=>(
                                            <div className="image__preview">
                                                <img src={image.url} alt='house preview' className='choosen__img' />
                                                {imageToRemove !== image.public_id && 
                                                    <i className="fa fa-times-circle close-icon delete" onClick={()=>handleDelete(image)}> </i>
                                                }      
                                            </div>
                                        ))} 
                                    </div>
                                <input 
                                    id='name'
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={onChange}
                                    required
                                    className="form__input" 
                                    placeholder="name" 
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
                                    required
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
                                required
                                minLength='6'
                            />
                            <label 
                                htmlFor="password2" 
                                className="form__label">
                                Confirm Password
                            </label>
                                <input 
                                    type="submit"  
                                    value="Signup" 
                                    name="submit" 
                                    className="btn btn--green" 
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const style = {
  
}
export default Register
