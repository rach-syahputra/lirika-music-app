import React from 'react'
import "./newReleases.css"

const NewReleases = () => {
  return (
    <div className='newReleases'>
      <div className="header">
        <h2>New Releases</h2>
      </div>

      <div className="newReleaseList">


        {(() => {
          const items = [];
          for (let i = 0; i < 20; i++) {
            items.push(
              <div className="item" key={i}>
                <div className="newReleaseImg">
                  <img src="https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2022/03/SOP-Incurso-cover-art.jpg" alt="" />
                </div>
                <div className="info">
                  <h3 className='albumName' >Incurso</h3>
                  <h4 className='artistName'>Spawn Of Posession</h4>
                </div>
              </div>
            );
          }
          return items;
        })()}
      </div>
    </div>
  )
}

export default NewReleases