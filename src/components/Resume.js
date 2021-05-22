import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from './Bar';

const languages = [
    {
        icon: python,
        name: 'Python',
        level: '45'
    },
    {
        icon: react,
        name: 'SQL',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'react',
        level: '60'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'Figma',
        level: '85'
    },
    {
        icon: react,
        name: 'Photoshop',
        level: '45'
    },
    {
        icon: react,
        name: 'Illustrator',
        level: '60'
    },

]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            mechanical and automation enginee
                        </h5>
                        <p className="resume-card__name">
                            IGDTUW(2019-2023)
                        </p>
                        <p className="resume-card__details">I am currently persuing B.tech in mechanical and automation engineering from IGDTUW</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            
                        </h5>
                        <p className="resume-card__name">
                         
                        </p>
                        <p className="resume-card__details"></p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;