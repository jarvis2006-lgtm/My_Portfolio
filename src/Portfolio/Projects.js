import React from 'react'

const projects=[
    {
        id:1,
        title:"Sea view restaurant",
        description:"Built a fully responsive multi-page restaurant website with Home, About, Menu, Special Dishes, Gallery, Book-a-Table, and Contact pages. Designed a clean and modern UI using HTML, CSS, and Bootstrap, ensuring smooth layout. Added a working table-booking form and optimized images to keep the website fast and easy to navigate.",
        image:"/images/sea_view_restaurant.png"
    }
]


const Projects = () => {
  return (
    <div className="section">
        <h2>Projects</h2>
        <div className="projects">
        {projects.map((project)=>(
            <div className="projectcard" key={project.id}>
                <img src={project.image} alt={project.title} loading="lazy" height="250px"/>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                </div>
        ))}
        </div>
    </div>
  )
}

export default Projects
