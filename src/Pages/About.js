  import React from  'react'
  import HeroBg from  '../Assets/Hero-bg.jpeg'

  const About = () => {
    return (
      <div style={{ height: '100%' }} className='about p-3'>
        <div style={{ backgroundColor: '#EADED7', width: '100%' }} className='p-4'>
          <h1 className='about-home' >Home/ <span className='about-page'>About</span> </h1>
        </div>
        <div className="row p-5">
          <div className="col-6 ">
            <img src={HeroBg} alt="" style={{ objectFit: 'cover', height: "500px", width: '100%' }} />
          </div>

          <div className="col-6 hero text-start ">
            <div>
              <h1 className='fw-bold hello color2 text-start'>
                Our Story
              </h1>
            </div>

            <div  >
              <p className='lh-small fs-5 color1 text-start'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
              </p>
            </div>
            <div>


            </div>
          </div>

        </div>
      </div>
    )
  }

  export default About