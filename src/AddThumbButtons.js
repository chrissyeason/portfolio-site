import React from 'react';
import DoCoolShitThumbnail from './components/DoCoolShit/thumbnail.jpg';
import MeowWoofThumbnail from './components/MeowWoof/thumbnail.jpg';
import CakePleaseThumbnail from './components/CakePlease/thumbnail-cake-please.jpg';
import CedarDoorThumbnail from './components/CedarDoor/CedarDoor-logo-wood-sm.jpg';
import LaVolpeThumbnail from './components/LaVolpe/LaVolpe-logo-sm.jpg';
import CampThumbnail from './components/Camp/Camp-Poster1-sm.jpg';

function AddThumbButton(props){
    return(
        <div>
        <div className="thumbnail-container">
            <img src={DoCoolShitThumbnail} className="modal-thumbnail" onClick={props.addCool} />
            <img src={MeowWoofThumbnail} color="white" onClick={props.addMeow} />
            <img src={CakePleaseThumbnail} color="white" onClick={props.addCake} />
        </div>
        <div className="thumbnail-container-2nd-row">
            <img src={CedarDoorThumbnail} onClick={props.addCedarDoor}/>
            <img src={LaVolpeThumbnail} onClick={props.addLaVolpe}/>
            <img src={CampThumbnail} onClick={props.addCamp}/>
        </div>
        </div>
    )
}
export default AddThumbButton;