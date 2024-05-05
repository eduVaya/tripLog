import React from "react";
import defaultProfilePic from '../../assets/icons/default_profile_pic.svg';

export default ({ size = "small", src = defaultProfilePic }) => {

    return (

        <div className='roundedProfilePicture'>
            <img className={`roundedProfilePicture--image--${size}`} src={src} alt="Foto de perfil" />
        </div>

    )
}