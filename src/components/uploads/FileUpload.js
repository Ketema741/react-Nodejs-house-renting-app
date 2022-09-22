// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState } from "react";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation, 
  FilePondPluginImagePreview,
  
);

const FileUpload = ()  => {
  const [files, setFiles] = useState([])
  return (
      <FilePond 
        allowMultiple={true}
        allowReorder={true}
        files={files}
        name='files'
        allowImageCrop={true}
        allowImageTransform={true}
        imageCropAspectRatio={'1:1'}
        onupdatefiles={(file)=>{
          setFiles(file)
          console.log(file)}
        }
      />
  )
}
export default FileUpload;