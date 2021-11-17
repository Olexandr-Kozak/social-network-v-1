import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.mainImg}>
                <img src="https://klike.net/uploads/posts/2019-07/1562069947_1.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.logoImg}>
                    <img src="https://seeklogo.com/images/I/IMG-logo-931DB0D0DA-seeklogo.com.gif" alt="img-1"/>
                </div>
                <div className={s.descr}>
                    descr
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
