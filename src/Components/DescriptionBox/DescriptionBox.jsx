import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div className='descriptionBox-navigator'>
            <div className='descriptionBox-nav-box'>
                Description
            </div>
            <div className='descriptionBox-nav-box fade'>
                Reviews (122)
            </div>
           
        </div>
        <div className='descriptionBox-description'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nulla ab, temporibus, reprehenderit rem est ut mollitia incidunt, amet ipsa obcaecati illum eligendi voluptates eum nam praesentium voluptate vitae sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure corporis ducimus iusto distinctio amet voluptatibus laboriosam praesentium rerum dolor nisi, exercitationem perspiciatis cumque accusamus corrupti, minima, ullam maiores ex magnam.</p>
            </div>
      
    </div>
  )
}

export default DescriptionBox
