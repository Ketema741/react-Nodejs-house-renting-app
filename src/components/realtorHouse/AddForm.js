import React, { useContext, useState,useEffect } from "react";
import HouseContext from "../../context/house/houseContext";
import CloudinaryUploadWidget from "../cloudinary/CloudinaryUploadWidget";

const initialState = {
    realtor: '',
    title: "",
    description: "",
    location: "",
    area: '',
    bed: '',
    bath:'',
    price: '',
    propertyType: "",
    garage: '',
    yearBuilt: '',
    houseImages:null
  };

const AddForm = () => {
        
    const houseContext = useContext(HouseContext);
    const { current, addHouse, removeImage, clearCurrent, updateHouse, } = houseContext;
 
    useEffect(() => {
    if(current !== null) {
        setHouse(current)
    } else {
        setHouse({
            realtor: '',
            title: "",
            description: "",
            location: "",
            area: '',
            bed: '',
            bath: '',
            price: '',
            propertyType: "",
            garage: '',
            yearBuilt: '',
            houseImages: null
        })
    } 
    }, [current])
    
    const [house, setHouse] = useState(initialState);
    const [images, setImages] = useState([])
    const [imageToRemove, setImageToRemove] = useState()
    
    const {
        title,
        description,
        location,
        area,
        bed,
        bath,
        price,
        propertyType,
        garage,
        yearBuilt,   
    } = house; 

    const onChange = (e) =>{
        setHouse({ ...house, [e.target.name] : e.target.value });
    }

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
    

    // add house
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (current == null) {
            addHouse(house, images) 
        } else {
            updateHouse(house)
        }
        clearAll()
        setHouse({
            realtor: '',
            title: "",
            description: "",
            location: "",
            area: '',
            bed: '',
            bath: '',
            price: '',
            propertyType: "",
            garage: '',
            yearBuilt: '',
            houseImages: null
        })

        setImages(null)
    };
    
    //  clear all
    const clearAll = () => {
        clearCurrent()
    }

    return (
        <section className="add">
            <div className="add-home"> 
                <div className="add__form">
                    <form className="form" onSubmit={onSubmitHandler}>
                        <div className="form__input">
                            <CloudinaryUploadWidget handleOpenWidget={handleOpenWidget} />
                            <div className='img__preview-container'>
                                {images !==null && images.map((image)=>(
                                    <div className="image__preview">
                                        <img src={image.url} alt='house preview' className='choosen__img' />
                                        {imageToRemove !== image.public_id && 
                                            <i className="fa fa-times-circle close-icon delete" onClick={()=>handleDelete(image)}> </i>
                                        }       
                                    </div>
                                ))} 
                            </div>
                            <label htmlFor="image" className="form__label">image</label>
                        </div>
                        <div className="form__input--col-1">
                            <input onChange={onChange} value={title} type="text" className="form__input"  placeholder="House title" name="title"  id="title" required
                            />
                            <label htmlFor="title" className="form__label">House Name </label>
                        </div>
                        <div className=" form__input--col-1">
                            <input onChange={onChange} value={propertyType} type="text" className="form__input" placeholder="Property Type " name="propertyType" id="propertyType" required
                            />
                            <label htmlFor="propertyType" className="form__label">
                                Property Type
                            </label>
                        </div>

                        
                        <div className=" form__input--grid-2">
                            <div className="form__input--col-1">
                                <input onChange={onChange} value={location} type="text" className="form__input"  placeholder="Location" name="location"  id="location" required
                                />
                                <label htmlFor="location" className="form__label">Location</label>
                            </div>
                            <div className="form__input--col-1">
                                <input onChange={onChange} value={bed} type="text" className="form__input" placeholder="Bed Rooms " name="bed" id="bed" required
                                />
                                <label htmlFor="bed" className="form__label">
                                    Bed Rooms
                                </label>
                            </div>
                            <div className="form__input--col-1">
                                <input onChange={onChange} value={bath} type="text" className="form__input" placeholder="Bath Rooms " name="bath" id="bath" required
                                />
                                <label htmlFor="bath" className="form__label">
                                Bath Rooms
                                </label>
                            </div>
                            <div className="form__input--col-1">
                                <input onChange={onChange} value={area} type="text" className="form__input" placeholder="Area" name="area" id="area"
                                required
                                />
                                <label htmlFor="area" className="form__label">Area</label>
                            </div>

                            <div className="form__input--col-1">
                                <input onChange={onChange} value={price} type="text" className="form__input" placeholder="Price" name="price"
                                id="price" required
                                />
                                <label htmlFor="price" className="form__label">
                                Price
                                </label>
                            </div>
                            <div className="form__input--col-1">
                                <input onChange={onChange} value={yearBuilt} type="date" className="form__input" placeholder="Year Built" name="yearBuilt"
                                id="yearBuilt" required
                                />
                                <label htmlFor="yearBuilt" className="form__label">Year Built
                                </label>
                            </div>
                            <div className="form__input--col-1">
                                <input onChange={onChange} value={garage} type="text" className="form__input" placeholder="Garage" name="garage" id="garage" required
                                />
                                <label htmlFor="garage" className="form__label">Garage
                                </label>
                            </div>
                        </div>

                        <input onChange={onChange} value={description} type="text" className="form__input" placeholder="House description" name="description" id="description" required
                        />
                        <label htmlFor="description" className="form__label">
                            House description
                        </label>

                        <input 
                            type="submit" 
                            value={current ? "Update House":"Add House"} name="submit" 
                            className="btn btn--green" 
                        />
                        
                        { current && (
                            <button 
                                onClick={clearAll}
                                className="btn home__btn" 
                                > Clear 
                            </button>
                        )}
                    </form>
                </div>  {/* add__form end*/}
            </div>  {/* add-home end*/}
        </section>
    )
}

export default AddForm