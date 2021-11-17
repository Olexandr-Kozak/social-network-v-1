import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>

            <img
                src="https://img2.freepng.ru/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg"
                alt="1"/>
            {props.message}
            <div>
                <span>Like {props.likesPost}</span>
            </div>


        </div>

    );
}

export default Post;
