import React, {useState, useRef} from 'react'
import upload from './upload.png'

const FormUpload = ({partner_id}) => {
    const [total, setTotal] = useState(0);
    const [images, setImages] = useState([]);
    let uploadInput = useRef()
  
  
    const handleUploadImage = async (ev) => {
      ev.preventDefault();
  
      const data = new FormData();
      data.append('file', uploadInput.files[0]);
  
     await fetch(`http://localhost:5200/upload/${partner_id}`, {
        method: 'POST',
        body: data,
      }).then((response) => {
        response.json().then((body) => {
            setTotal(total + 1)
            setImages([...images, body])
        });
      });
    }

      return (
        <div  className='formupload-container'>
            <div>
            <div className="images-title">
            <h1 className='title-upload'>Upload Images</h1>
            <div className='prev-images'>
                <img src={total >= 1 ? images[0]:upload} 
                alt="" className="img-upload"
                style={{width:"200px", height:"200px"} }></img>
                <img src={total >= 2 ? images[1]:upload}
                alt="" className="img-upload"
                style={{width:"200px", height:"200px"} }></img>
                <img src={total >= 3 ? images[2]:upload}
                alt="" className="img-upload"
                style={{width:"200px", height:"200px"} }></img>
            </div>
            </div>
        </div>
          <div className="container-button-upload">
            <input ref={(ref) => {uploadInput = ref}} type="file"
            style={{color: "transparent"}}
            onChange={handleUploadImage} 
            className="upload-button"/>
          </div>
          <div>
          </div>
        </div>
      );
    }

  export default FormUpload