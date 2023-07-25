import React from 'react'
import { images } from '../constants'

const Security = () => {
  return (
    <>
    <div className="service-security-banner wf-section">
      <div className="container w-container">
        <div className="banner-title-wrap">
          <div className="subtitle-wrap-dark">
            <div className="subtitle-border"></div>
            <p className="subtitle-dark">Security</p>
          </div>
          <h1 className="page-title">Hay Bravo Security Services</h1>
        </div>
      </div>
      <div className='sociolo'>
              <a
                href="https://instagram.com/haybravosecurity?igshid=NGExMmI2YTkyZg=="
                className="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc36ddb063a39e687b631_Insta-icon.svg"
                  loading="lazy"
                  alt="Instagram Icon"
                  className="social-icon" /></a
              ><a
                href="https://www.facebook.com/people/Hay-Bravo-international-Security-Consulting-Company-LTD/100083540643909/?paipv=0&eav=AfZk-s4y746llh98g-ucTA49Evlvof1CLxJFw7wUuMuxVa74Hh-VyyK0A-8yJhxdWHw&_rdr"
                className="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc46c51c3425c77fb5dc3_fb-icon.svg"
                  loading="lazy"
                  alt="Facebook Icon"
                  className="social-icon" /></a
              ><a
                href="https://twitter.com/BravoHay13872?s=08"
                className="social-media-link w-inline-block"
                ><img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63cfc54529c06503197e6691_twiter-icon.svg"
                  loading="lazy"
                  alt="Twitter Icon"
                  className="social-icon" /></a
              >
            </div>
    </div>
    <div className="service wf-section">
      <div className="container w-container">
        <div className="align-center">
          <div className="subtitle-wrap">
            <div className="subtitle-border"></div>
            <p className="subtitle">What We Do</p>
          </div>
          <h2 className="section-title">Security Services</h2>
          <p>HayBravo Securities is a leading security solutions provider that excels in delivering a wide range of services, including CCTV installation/surveillance, VIP escort service, security consulting, risk assessment, security architecture design, security training and certification, and the deployment of physically trained guards. With a strong commitment to client satisfaction and a team of highly trained professionals, HayBravo Securities ensures exceptional security measures tailored to meet the unique needs of each client.</p>
        </div>
        <div className="mg-top-30">
          <div className="w-layout-grid about-service-grid">
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src={images.securitylogo}
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/security" className="service-title"
                  >CCTV installation / Surveillance:</a
                >
              </div>
              <div className="mg-top-10">
               <p>HayBravo Securities specializes in the installation and maintenance of state-of-the-art CCTV systems. Their team of skilled technicians assesses the client's premises, designs a comprehensive surveillance plan, and strategically places high-quality cameras to maximize coverage. By utilizing advanced monitoring software and analytics, HayBravo Securities provides real-time video monitoring, intelligent motion detection, and efficient video storage solutions, ensuring robust surveillance capabilities.</p>
              </div>
            </div>
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src={images.escortservice}
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/security" className="service-title"
                  >Hay Bravo Security Escort Service:</a
                >
              </div>
              <div className="mg-top-10">
                <p className='securityp'>
                HayBravo Securities understands the importance of providing discreet and reliable VIP escort services. Their highly trained security personnel possess extensive experience in VIP protection and possess exceptional situational awareness. Whether it's public appearances, business trips, or high-profile events, HayBravo Securities deploys a dedicated team to ensure the safety and privacy of VIP clients. They maintain strict confidentiality, implement secure travel arrangements, and effectively manage potential security threats with utmost professionalism.
                </p>
              </div>
            </div>
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src={images.securityconsult}
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/security" className="service-title"
                  >Security Consulting:</a
                >
              </div>
              <div className="mg-top-10">
               <p>
               With a team of experienced security consultants, HayBravo Securities offers comprehensive security consulting services. They conduct in-depth assessments of the client's security infrastructure, identifying vulnerabilities and areas for improvement. HayBravo Securities provides expert guidance, recommending appropriate security measures and implementing tailored strategies to enhance overall security levels. Their consultants stay updated with the latest industry practices, regulations, and emerging threats, ensuring clients receive the most effective security solutions.
               </p>
              </div>
            </div>
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src={images.securotyarc}
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/security" className="service-title"
                  >Security Architecture Design:</a
                >
              </div>
              <div className="mg-top-10">
               <p>
               HayBravo Securities excels in designing comprehensive security architectures tailored to client requirements. Their team of security architects analyzes the client's premises, assets, and specific security challenges. By considering access control systems, intrusion detection technologies, video surveillance, and other security measures, they design robust security frameworks. The result is a cohesive and integrated system that maximizes security effectiveness while optimizing resource allocation.
               </p>
              </div>
            </div>
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src={images.certificate}
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/security" className="service-title"
                  >Security Training and Certification:</a
                >
              </div>
              <div className="mg-top-10">
               <p>
               HayBravo Securities recognizes the critical role of well-trained security personnel. They offer comprehensive training programs that cover various aspects of security, ranging from conflict resolution and emergency response to surveillance techniques and customer service. Their training courses are conducted by experienced instructors who bring real-world expertise to the learning environment. Upon completion, participants receive certifications that validate their skills and enhance their professional growth in the security industry.
               </p>
              </div>
            </div>
            <div className="about-service-wrap">
              <div className="service-icon-wrap">
                <img
                  src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c908d026433a30c99bbeff_user-icon.svg"
                  loading="lazy"
                  alt="Ship Icon"
                />
              </div>
              <div className="mg-top-20">
                <a href="/security" className="service-title"
                  >Deployment of Physical Trained Guards:</a
                >
              </div>
              <div className="mg-top-10">
               <p>
               HayBravo Securities ensures the deployment of physically trained guards who are meticulously selected and rigorously trained. These guards undergo extensive training programs covering physical security, access control, first aid, crisis management, and customer service. Their presence instills confidence and deters potential threats, while their proactive approach enables them to effectively respond to security incidents. HayBravo Securities ensures the highest standards of professionalism, integrity, and reliability in the deployment of their guards.
               </p>
              </div>
            </div>
          </div>
          <div className="mg-top-40">
            <div
              data-w-id="fd8a62a1-a09a-a7b7-6061-8c84547b0435"
              //style="opacity: 0"
              className="align-center"
            >
              {/* <a
                data-w-id="fd8a62a1-a09a-a7b7-6061-8c84547b0436"
                href="/project"
                className="dark-overlay-button w-inline-block"
                ><div>More Work</div>
                <div
                //   style="
                //     -webkit-transform: translate3d(0px, 0px, 0) scale3d(1, 1, 1)
                //       rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //     -moz-transform: translate3d(0px, 0px, 0) scale3d(1, 1, 1)
                //       rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //     -ms-transform: translate3d(0px, 0px, 0) scale3d(1, 1, 1)
                //       rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //     transform: translate3d(0px, 0px, 0) scale3d(1, 1, 1)
                //       rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                //   "
                  className="dark-button-hover"
                ></div
              ></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="project-section wf-section">
      <div className="container w-container">
        <div className="project-list-wrapper w-dyn-list">
          <div role="list" className="project-list w-dyn-items w-row">
            <div role="listitem" className="project-item w-dyn-item w-col w-col-4">
              <a
                data-w-id="14fba6d4-6cf2-8f6d-19cc-b6975ea28168"
                href="/security"
                className="project-card w-inline-block"
                ><img
                  alt="Project "
                  loading="lazy"
                  src={images.securitymen}
                  width='400'
                  height='300'
                  sizes="100vw"
                //   srcset="
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b555dfef59602535414951_project-image-1-p-500.jpg 500w,
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b555dfef59602535414951_project-image-1.jpg       760w
                //   " 
                  />
                <div
                  //style="opacity: 0; display: none"
                  className="project-card-overlay"
                >
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63ad2e599a624b58b1b56755_project-icon.png"
                    loading="lazy"
                    alt="Upload Icon"
                  /></div
              ></a>
            </div>
            <div role="listitem" className="project-item w-dyn-item w-col w-col-4">
              <a
                data-w-id="14fba6d4-6cf2-8f6d-19cc-b6975ea28168"
                href="/security"
                className="project-card w-inline-block"
                ><img
                  alt="Project"
                  loading="lazy"
                  src={images.securitypic1}
                  width='400'
                  height='300'
                  sizes="100vw"
                //   srcset="
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b555eb64a9580cd3320717_project-image-2-p-500.jpg 500w,
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b555eb64a9580cd3320717_project-image-2.jpg       760w
                //   "
                   />
                <div
                  //style="opacity: 0; display: none"
                  className="project-card-overlay"
                >
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63ad2e599a624b58b1b56755_project-icon.png"
                    loading="lazy"
                    alt="Upload Icon"
                  /></div
              ></a>
            </div>
            <div role="listitem" className="project-item w-dyn-item w-col w-col-4">
              <a
                data-w-id="14fba6d4-6cf2-8f6d-19cc-b6975ea28168"
                href="/security"
                className="project-card w-inline-block"
                ><img
                  alt="Project"
                  loading="lazy"
                  src={images.securitypic2}
                  width='400'
                  height='300'
                  sizes="100vw"
                //   srcset="
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b55629d3a5522070dab2c2_project-image-6-p-500.jpg 500w,
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b55629d3a5522070dab2c2_project-image-6.jpg       760w
                //   " 
                  />
                <div
                  //style="opacity: 0; display: none"
                  className="project-card-overlay"
                >
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63ad2e599a624b58b1b56755_project-icon.png"
                    loading="lazy"
                    alt="Upload Icon"
                  /></div
              ></a>
            </div>
            <div role="listitem" className="project-item w-dyn-item w-col w-col-4">
              <a
                data-w-id="14fba6d4-6cf2-8f6d-19cc-b6975ea28168"
                href="/security"
                className="project-card w-inline-block"
                ><img
                  alt="Project"
                  loading="lazy"
                  src={images.securityexpert}
                  width='400'
                  height='300'
                  sizes="100vw"
                //   srcset="
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b5563ae06df80604ffceee_project-image-7-p-500.jpg 500w,
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b5563ae06df80604ffceee_project-image-7.jpg       760w
                //   " 
                  />
                <div
                  //style="opacity: 0; display: none"
                  className="project-card-overlay"
                >
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63ad2e599a624b58b1b56755_project-icon.png"
                    loading="lazy"
                    alt="Upload Icon"
                  /></div
              ></a>
            </div>
            <div role="listitem" className="project-item w-dyn-item w-col w-col-4">
              <a
                data-w-id="14fba6d4-6cf2-8f6d-19cc-b6975ea28168"
                href="/security"
                className="project-card w-inline-block"
                ><img
                  alt="Projecte"
                  loading="lazy"
                  src="https://hoganguards.com/wp-content/uploads/2021/05/hogan-guards-armed-escort-services.jpg"
                  width='400'
                  height='300'
                  sizes="100vw"
                //   srcset="
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b55646077974706a0d9a2e_project-image-8-p-500.jpg 500w,
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b55646077974706a0d9a2e_project-image-8.jpg       760w
                //   " 
                  />
                <div
                  //style="opacity: 0; display: none"
                  className="project-card-overlay"
                >
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63ad2e599a624b58b1b56755_project-icon.png"
                    loading="lazy"
                    alt="Upload Icon"
                  /></div
              ></a>
            </div>
            <div role="listitem" className="project-item w-dyn-item w-col w-col-4">
              <a
                data-w-id="14fba6d4-6cf2-8f6d-19cc-b6975ea28168"
                href="/security"
                className="project-card w-inline-block"
                ><img
                  alt="Project"
                  loading="lazy"
                  src="https://gissinternational.com/wp-content/uploads/elementor/thumbs/ESCORT-SERVICE-p0k2i2xgvzsw5be6ny26cwpzklwxec0447duk4jnos.jpg"
                  width='400'
                  height='300'
                  sizes="100vw"
                //   srcset="
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b556533b121544eb43a741_project-image-9-p-500.jpg 500w,
                //     https://assets.website-files.com/63abcee0c73ddf75dc0c8678/63b556533b121544eb43a741_project-image-9.jpg       760w
                //   " 
                  />
                <div
                  //style="opacity: 0; display: none"
                  className="project-card-overlay"
                >
                  <img
                    src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63ad2e599a624b58b1b56755_project-icon.png"
                    loading="lazy"
                    alt="Upload Icon"
                  /></div
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <div className="counter-section wf-section">
      <div className="w-layout-grid counter-grid">
        <div
          id="w-node-eba6a825-a251-0f20-a52e-e6429d121cd5-6151f40f"
          className="counter-card"
        >
          <p className="counter-number"></p>
          <div className="counter-text-wrap">
            <div className="counter-block yellow-gradient"></div>
            <p className="counter-text">Surveillance</p>
          </div>
        </div>
        <div
          id="w-node-eba6a825-a251-0f20-a52e-e6429d121cdd-6151f40f"
          className="counter-card"
        >
          <p className="counter-number"></p>
          <div className="counter-text-wrap">
            <div className="counter-block yellow-gradient"></div>
            <p className="counter-text">Access Control</p>
          </div>
        </div>
        <div
          id="w-node-eba6a825-a251-0f20-a52e-e6429d121ce5-6151f40f"
          className="counter-card"
        >
          <p className="counter-number"></p>
          <div className="counter-text-wrap">
            <div className="counter-block yellow-gradient"></div>
            <p className="counter-text">Property Security</p>
          </div>
        </div>
        <div
          id="w-node-eba6a825-a251-0f20-a52e-e6429d121ced-6151f40f"
          className="counter-card"
        >
          <p className="counter-number"></p>
          <div className="counter-text-wrap">
            <div className="counter-block yellow-gradient"></div>
            <p className="counter-text">Surveillance and Intelligence</p>
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Security