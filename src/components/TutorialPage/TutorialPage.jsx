import React from "react";
import TutorialCards from "../TutorialCard/TutorialCard";
import {TutorialObject} from '../Object/ObjectTutorial'

const TutorialPage = () => {
    return (
        <div className="w-[80%] m-auto flex flex-wrap gap-x-5 gap-y-5 mt-17">
            {
                TutorialObject.map((current,index)=>(
                    <TutorialCards
                    key ={index}
                    image = {current.Image}
                    name = {current.name}/>
                ))
            }
            
        </div>
    );
};

export default TutorialPage;
