// export default Portfolio;
import React from 'react';
import Project from './Project';
import sendNews from '../../assets/pictures/1.PNG';
import PlentifulPantryProfile from '../../assets/pictures/Plentiful-Pantry_Profile.png';
import techBlog from '../../assets/pictures/Tech-blog-homePage.png';
const Portfolio = () => {
  return (
    <section id="Portfolio" style={{ padding: '20px', background: '#f8f1e5', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', border: '2px solid #00b4d8' }}>
      <h2>Portfolio</h2>
      <div className="row justify-content-center g-4">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Project
            title="Send News"
            description="Server Side API"
            demoLink="https://tykervella.github.io/send-News/"
            repoLink="https://github.com/tykervella/send-News"
            backgroundImage={sendNews}
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Project
            title="Plentiful Pantry"
            description="This is the second project."
            demoLink="https://plentiful-pantry.herokuapp.com/"
            repoLink="https://github.com/Getnetgit/Plentiful_Pantry"
            backgroundImage={PlentifulPantryProfile}
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <Project
            title="Tech Blog"
            description="MySQL/Handlbars"
            demoLink="https://tech-blog-web.herokuapp.com/"
            repoLink="https://github.com/Getnetgit/TechBlog"
            backgroundImage={techBlog}
          />
        </div>
    
       
      </div>
    </section>
  );
};

export default Portfolio;
