import React, { useContext, useEffect, useReducer, useState } from "react";
import HouseContext from "../../context/house/houseContext";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation, 
  FilePondPluginImagePreview,
  
);



const AddForm = () => {
    const initialState = {
        realtor: null,
        title: "",
        description: "",
        location: "",
        area: null,
        bed: null,
        bath:null,
        price: null,
        propertyType: "",
        garage: null,
        yearBuilt: null,
      };
    
      const [house, setHouse] = useState(initialState);
      const houseContext = useContext(HouseContext);
    
      const {
        Houses,
        current,
        filtered,
        getHouses,
        addHouse,
        clearHouses,
        deleteHouse,
        setCurrent,
        clearCurrent,
        updateHouse,
        filterHouses,
        clearFilter,
      } = houseContext;
    
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


    const [files, setFiles] = useState([])

    const FileUpload = ()  => {
        return (
            <FilePond 
            allowMultiple={true}
            allowReorder={true}
            files={files}
            name='files'
            allowImageCrop={true}
            allowImageTransform={true}
            imageCropAspectRatio={'1:1'}
            onupdatefiles={setFiles(files)}
            />
        )
    }
    
    const onChange = (e) =>{
        setHouse({ ...house, [e.target.name]: e.target.value });
        console.log(e.target.value)
    }

    
    // add house
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(files)
    };

    return (
        <section className="add">
            <div className="add-home"> 
                <div className="add__form">
                    <form className="form" onSubmit={onSubmitHandler}>
                        <div className="form__input">
                            <FileUpload  />
                        </div>
                        <label htmlFor="image" className="form__label">image</label>
                        
                        <div className=" form__input--grid-1">
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
                        </div>

                        <div className=" form__input--grid-2">
                            <div className="form__input--col-1">
                                <input onChange={onChange} value={location} type="text" className="form__input"  placeholder="Location" name="location"  id="location" required
                                />
                                <label htmlFor="location" className="form__label">Location</label>
                            </div>
                            <div className="form__input--col-1">
                                <input onChange={onChange} value={bed} type="text" className="form__input" placeholder="Bed Rooms " name="bedRoom" id="bedRoom" required
                                />
                                <label htmlFor="bedRoom" className="form__label">
                                Bed Rooms
                                </label>
                            </div>
                            <div className="form__input--col-1">
                                <input onChange={onChange} value={bath} type="text" className="form__input" placeholder="Bath Rooms " name="bathRoom" id="bathRoom" required
                                />
                                <label htmlFor="bathRoom" className="form__label">
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
                                <input onChange={onChange} value={price} type="text" className="form__input" placeholder="Price" name="propertyType"
                                id="price" required
                                />
                                <label htmlFor="propertyType" className="form__label">
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

                        <input type="submit" value="submit" name="submit" className="btn btn--green" />
                    </form>
                </div>  {/* add__form end*/}
            </div>  {/* add-home end*/}
        </section>
    )
}

export default AddForm