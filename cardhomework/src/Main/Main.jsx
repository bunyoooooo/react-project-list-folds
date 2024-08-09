import { useState } from 'react'
import './Main.css'
const Folderdesc = [
    {
        id: 1,
        activ_line:true,
        folder_avo:"./images/photosnap.svg",
        profesio:"Photosnap",
        new:true,
        featured:true,
        folder_name:"Senior Frontend Developer",
        folder_fich:["frontend","senior","html","CSS","javascript"]
    },
    {
        id: 2,
        activ_line:true,
        folder_avo:"./images/manage.svg",
        profesio:"Manage",
        new:true,
        featured:true,
        folder_name:"Fullstack Developer",
        folder_fich:["Fullstack","Midweight","Python","React"]
    },
    {
        id: 3,
        activ_line:false,
        folder_avo:"./images/account.svg",
        profesio:"Account",
        new:true,
        featured:false,
        folder_name:"Junior Frontend Developer",
        folder_fich:["Frontend","Junior","JavaScript","React","Sass"]
    },
    {
        id: 4,
        activ_line:false,
        folder_avo:"./images/myhome.svg",
        profesio:"MyHome",
        new:false,
        featured:false,
        folder_name:"Junior Frontend Developer",
        folder_fich:["frontend","Junior","CSS","javascript"]
    },
    {
        id: 5,
        activ_line:false,
        folder_avo:"./images/loop-studios.svg",
        profesio:"Loop Studios",
        new:false,
        featured:false,
        folder_name:"Software Engineer",
        folder_fich:["Fullstack","Midweight","JavaScript","Ruby","Sass"]
    },
    {
        id: 6,
        activ_line:false,
        folder_avo:"./images/faceit.svg",
        profesio:"FaceIt",
        new:false,
        featured:false,
        folder_name:"Junior Backend Developer",
        folder_fich:["Backend","Junior","Ruby","RoR"]
    },
    {
        id: 7,
        activ_line:false,
        folder_avo:"./images/shortly.svg",
        profesio:"Shortly",
        new:false,
        featured:false,
        folder_name:"Junior Developer",
        folder_fich:["Frontend","Junior","HTML","JavaScript","Sass"]
    },
    {
        id: 8,
        activ_line:false,
        folder_avo:"./images/eyecam-co.svg",
        profesio:"Eyecam Co.",
        new:false,
        featured:false,
        folder_name:"Full Stack Engineer",
        folder_fich:["Fullstack","Midweight","JavaScript","Python","Django"]
    },
    {
        id: 9,
        activ_line:false,
        folder_avo:"./images/the-air-filter-company.svg",
        profesio:"The Air Filter Company",
        new:false,
        featured:false,
        folder_name:"Front-end Dev",
        folder_fich:["Frontend","Junior","JavaScript","React","Sass"]
    }
]
function Main() {
  return (
    <>
      <div className="cards">
        {Folderdesc.map((onefolderdesc) => {
            return (
                <div className="card">
                        {onefolderdesc.activ_line ? <span className="card-line"></span> : ""}
                        
                        <img src={onefolderdesc.folder_avo} alt="" className="card-logo" />

                    <div className="card_texts">
                        <div className="card-onerow">
                            <p className="folder profesion">{onefolderdesc.profesio}</p>
                            {onefolderdesc.new ? <p className="newer">NEW!</p> : ""}
                            {onefolderdesc.featured ? <p className="featured">FEATURED</p> : ""}
                            
                        </div>
                        <div className="card-tworow">
                            <h3 className="card-name">{onefolderdesc.folder_name}</h3>
                            <p className="lastactive">1d ago • Full Time • USA Only</p>
                        </div>
                    </div>
                    <div className="card-fiches">
                        {onefolderdesc.folder_fich.map((fiche) => {
                            return (
                                <p className="fiches">{fiche}</p>
                            )
                        })}
                    </div>
                </div>
            )
        })}
      </div>
    </>
  )
}

export default Main
