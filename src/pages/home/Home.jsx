import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/profile/ProfileSide";
import RightSide from "../../components/Rightside/RightSide";
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
            <div className="RightSide">Rightside</div>
        </div>
    )
}

export default Home;