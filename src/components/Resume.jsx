import React from 'react'
import ProgressBar from './ProgressBar'
import "./css/Resume.css"

export default function Resume() {
  return (
    <div className="projectsCont">
     <h1>My Skills</h1>
     <h3>"Building seamless experiences with clean and efficient code."

</h3>

<div className="skillCont">
<ProgressBar progress={85} skill="React Js" icon='react.png'/>
<ProgressBar progress={90} skill="Javascript" icon='js.png'/>
<ProgressBar progress={80} skill="HTML" icon='html.png'/>
<ProgressBar progress={85} skill="CSS" icon='css.png'/>
<ProgressBar progress={80} skill="Tailwind" icon='tailwind.svg'/>
<ProgressBar progress={70} skill="Node Js" icon='node.png'/>
<ProgressBar progress={75} skill="Express Js" icon='express.png'/>
<ProgressBar progress={75} skill="Mongo DB" icon='mongo.png'/>
<ProgressBar progress={70} skill="Redux" icon='redux.svg'/>
<ProgressBar progress={65} skill="Firebase" icon='firebase.png'/>
<ProgressBar progress={65} skill="Next Js" icon='next.png'/>
</div>




</div>
  )
}
