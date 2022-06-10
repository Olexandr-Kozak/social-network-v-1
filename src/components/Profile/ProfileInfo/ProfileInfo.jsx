import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {

  if(!props.profile){
    return <Preloader/>
  }

    return (
        <div>
            {/*<div className={s.mainImg}>*/}
            {/*    <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div className={s.logoImg}>
                    <img src="https://seeklogo.com/images/I/IMG-logo-931DB0D0DA-seeklogo.com.gif" alt="img-1"/>
                </div>
                <div className={s.descr}>
                  <img src={props.profile.photos.large} alt=""/>
                    <ProfileStatus status={"Hello my friends"}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
