import React from 'react';
import DoCoolShitThumbnail from './components/DoCoolShit/thumbnail.jpg';
import MeowWoofThumbnail from './components/MeowWoof/thumbnail.jpg';
import CakePleaseThumbnail from './components/CakePlease/thumbnail-cake-please.jpg';
function AddThumbButton(props){
    return(
        <div>
            <img src={DoCoolShitThumbnail} className="modal-thumbnail" onClick={props.addCool} />
            <img src={MeowWoofThumbnail} color="white" onClick={props.addMeow} />
            <img src={CakePleaseThumbnail} color="white" onClick={props.addCake} />

        </div>
    )
}
export default AddThumbButton;