import React from 'react';
import slidEffect from './project/all/slidEffect.png';

export default function About() {
    const arr = new Array(5).fill(slidEffect);

  return (
    <div className="about x">
        <div className="box fcs">
            <h3>About Us</h3>

            <div className="all">
                <div className="photo x">
                    {
                        arr.map((elem, index) => {
                            return (
                                <div className="detal" style={{ background : `url(${slidEffect})`, backgroundPositionX : (index * 25) + "%" }}></div>
                            )
                        })
                    }
                </div>
                <div className="info  fcs">
                    <h3>Skin care is important for everyone</h3>
                    <p>
                        Skin care is a part of the treatment of wound healling,
                        radiation therapy andsome medications. Skin care or
                        skincare is a range of practices that support skin integrity,
                        enhance is apperance, andrelieve skin conditions.
                    </p>
                    <p>
                        They can include nutrition, avoidanceof excessive sun exposure
                        and appropriate use of emllients. Skin care is a routine
                        daily procedure in many settings, such as
                        skin that is either too dry or too moist, and prevention of
                        dermatitsand prevention of skin injures.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
