import React from "react"
import Layout from "../../components/layout"
import { breakpoints } from "../../utils/breakpoints"
import styled from "styled-components"
import ProjectsBrush from "../../svg/assets/brushw.svg"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Projects = () => {
    
    return(
        <Layout>
            <ProjectsBackgroundGrid>
                <Background> 
                    <StaticImage 
                        src="../../images/projects.jpg"
                        alt=""
                        style={{position:"absolute"}}
                        className="projectsbanner"
                        loading="eager"
                        layout="fullWidth"
                        quality={50}
                    /> 
                 </Background>
                 <Overlay />
                    <Text>
                        <p>
                            To all donors and volunteers that make our work possible, Cypress says <strong>thank you</strong>. Find out more about how to get involved 
                            on our <a href="https://www.facebook.com/CypressMissions/">Facebook</a> and <a href="https://www.instagram.com/cypressmissions/">Instagram</a> pages.
                        </p>
                    </Text>
                 
            </ProjectsBackgroundGrid>   
                <ProjectsTitle>
                     <div>
                        <StyledProjectsBrush />
                        <h2>Projects</h2>
                     </div>
                 </ProjectsTitle>
                 <ProjectsWrapper>
                  {/* Kentucky Trip */}
                <section>
                    <div>
                        <StaticImage 
                            src="../../images/KentuckyBanner.jpg"
                            alt="Kentucky Image"
                            placeholder="blurred"
                            quality={50}
                            layout="fullWidth"
                        />
                        
                    </div>
                    <div>
                        <h3>Kentucky</h3>
                        <p>When the tornadoes ripped through Kentucky Cypress immediately assembled a small group of four from New Jersey to take on the task of finding where we could be most effective.
                            On arrival the effect on the surrounding communities from the tornadoes was heartbreaking. Our trip was necessary to lay the future ground work for where Cypress 
                            would be most effective.
                            </p> 
                             <Link to="/proj/kentucky">See More</Link>           
                    </div>
                </section>
                {/* PuertoRico Trip */}
                <section>
                    <div> 
                        <StaticImage 
                            src="../../images/puertorico.jpg"
                            alt="Puerto Rico Image"
                            placeholder="blurred"
                            layout="fullWidth"
                            quality={50}
                        />
                        
                    </div>
                    <div>
                        <h3>Puerto Rico</h3>
                        <p>Puerto Rico has never fully recovered from the devastation left in the wake of hurricane Maria, which claimed over 3,000 lives. Following the storm in September 2017, Cypress began 
                            cleaning up the neighborhoods around Vega Baja, patching roofs and building friendships with town leaders. Cypress is now focused on education reform on the island, with the goal of 
                            motivating the next generation of leaders. </p> 
                             <Link to="/proj/puertorico">See More</Link>           
                    </div>
                </section>
                {/* Bahamas */}
                <section>
                    <div>
                        <StaticImage 
                            src="../../images/bahamas.jpg"
                            alt="Bahamas Image"
                            aspectRatio={1.5}
                            quality={50}
                            layout="fullWidth"
                        />
                    </div>
                    <div>
                        <h3>Bahamas</h3>
                        <p>Our latest trip to Green Turtle Cay, Bahamas 3 years after hurricane Dorian. Working wth the local residents as well as other NGO's, we have seen much progress. Charles Williams now has a place he can call home, instead of the attic he's lived in for the past 3 years. Bringing Leslie & Sienna Dames one step closer to completing their house. Gathering children  together for Cay Kids Day for a time of music, crafts and games. Cypress is thankful to be involved with such a great community!</p>
                        <Link to="/proj/bahamas">See More</Link>  
                    </div>
                </section>
                {/* Haiti */}
                <section>
                    <div>
                        <StaticImage 
                            src="../../images/haiti.jpg"
                            alt="Haiti Image"
                            placeholder="blurred"
                            quality={50}
                            layout="fullWidth"
                        />
                    </div>
                    <div>
                        <h3>Haiti</h3>
                        <p>The poorest country in the Western Hemisphere, Haiti has been ground zero for American non-profits. Unfourtunately so much of the humanitarian aid brought to the island is spoiled or wasted, but Cypress remains committed 
                            to finding unique ways of making a lasting impact.
                        </p>
                        <Link to="/proj/haiti">See More</Link>  
                    </div>
                </section>
                {/* London */}
                <section>
                <div>
                    <StaticImage 
                            src="../../images/london.jpg"
                            alt="Puerto Rico Image"
                            placeholder="blurred"
                            layout="fullWidth"
                            quality={50}
                        />
                    </div> 
                    <div>
                        <h3>London</h3>
                        <p>Cypress partnered with the community group <strong>Welcome Syrian Families</strong> to provide affordable housing for refugee families fleeing war-torn Syria.</p>
                        <Link to="/proj/london">See More</Link>  
                    </div>
                </section>{
                /* Bulgaria */}
                <section>
                <div>
                    <StaticImage 
                            src="../../images/bulgaria.jpg"
                            alt="Puerto Rico Image"
                            placeholder="blurred"
                            layout="fullWidth"
                            quality={50}
                        />
                        
                    </div>
                    <div>
                        <h3>Bulgaria</h3>
                        <p>In Bulgaria, Cypress was able to puchase much needed school supplies for village schools in one of Europe's poorest regions. Additionally, Cypress made repairs and upgrades to not only educational buildings but personal
                    homes as well, including making a baby room for an expecting mother. The town of Malomir has many needs.
                         </p>
                         <Link to="/proj/bulgaria">See More</Link>
                    </div>
                </section>
                {/* New Jersey */}
                <section>
                <div> 
                    <StaticImage 
                            src="../../images/greetings.jpg"
                            alt="Puerto Rico Image"
                            placeholder="blurred"
                            quality={50}
                            layout="fullWidth"
                        />
                        
                    </div>
                    <div>
                       <h3>New Jersey</h3>
                        <p>
                            Cypress is helping Asbury Park to continue establishing a clothing closet and pantry, along with our consistent efforts of work at Bethel AME Church, while still assisting the local community with any extra needs.
                        </p>
                         <Link to="/proj/newjersey">See More</Link>
                    </div>
                </section>
            </ProjectsWrapper>
        </Layout>
    )
}
export default Projects

const ProjectsBackgroundGrid = styled.div`
    display:grid;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(2,1fr);
    position:relative;    
`
const Background = styled.div`
    grid-area: 1 / 1 / 4 / 3;
    width:100%;
    height:80vh;
    position: relative;
    
    .projectsbanner{
        width:100%;
        height:100%;
    }
`
const Overlay = styled.div`
    grid-area: 1 / 1 / 4 / 3;
    position:relative;
    background:rgba(0,0,0,.2);
`
const Text = styled.div`
    background:rgba(255,255,255,.7);
    border-radius:20px;
    display:flex;
    flex-flow:column;
    height:auto;
    justify-content:center;
    align-items:center;
    position:absolute;
    bottom:0;
    right:0;
    max-width:40rem;
    width:80%;
    margin: 0 2rem 2rem 0;
    padding: 0 1rem;

    p{
        font-family: co-text, sans-serif;
        font-size:clamp(1rem,3.5vw,1.5rem);
        width:100%;
        text-align:center;
        line-height:1.5;
    }
    @media ${breakpoints.md}{
        left:0;
        right:0;
        margin: 0 auto;
        margin-bottom:2rem;
        width:80%;
    }
`
const ProjectsTitle = styled.div`
    width:100%;
    height:150px;
    div{
        height:100%;
        max-width:30rem;
        width:90%;
        margin: 0 auto;
        display:grid;
        grid-template-columns:1fr;
        grid-template-rows:1fr;
        align-items:center;

        h2{
           grid-area: 1 / 1 / 2 / 2; 
           font-family: flood-std, sans-serif;
           font-weight: 300;
           font-size: clamp(1.6rem,6vw,3rem);
           text-align:center;
           letter-spacing:2px;
           margin:0;
           color:#199453;
        }
    }
`
const StyledProjectsBrush = styled(ProjectsBrush)`
    grid-area: 1 / 1 / 2 / 2;
`
const ProjectsWrapper = styled.main`
   section{
        display:flex;
        flex-flow:column;
        
        div:first-child{
            overflow:hidden;
                div{
                    transition: transform .5s ease-in-out;
                        :hover{
                            transform:scale(1.1);
                        
                            }
                    }
        }


   h3{
        font-family:flood-std, sans-serif;
        font-weight:300;
        font-size:clamp(1.8rem, 4vw, 2.5rem);
        letter-spacing:2px;
        color:#199534;
        margin:0;
    }
    p{
        font-family: co-text, sans-serif;
        font-size: clamp(1rem,2vw, 1.2rem);
        line-height:28px;
        color:#5f5f5f;
        margin:0;
        letter-spacing:1px;
        width:90%;

        strong{
            color:black;
        }
    }

    a{
        background:#199534;
        border-radius:10px;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        max-height:4rem;
        height:10vw;
        min-height:3rem;
        max-width:12rem;
        font-family: flood-std, sans-serif;
        text-decoration:none;
        font-size:clamp(1rem, 4vw, 1.3rem);
        box-shadow: 0px 10px 10px rgba(0,0,0,.3);
        transition: box-shadow .2s ease-in-out;
        :active{
            box-shadow:none;
            
        }
    }
    }
    @media ${breakpoints.xl}{
        section{
            display:grid;
            margin:5rem auto;
            max-width:1920px;
            height:auto;
            
            padding:1rem 0;
            
            
            p{
                width:90%;
                margin:1rem 0 1.5rem 0;
            }
            h3{
                margin:0;
            }
        }
        section:nth-child(odd){
            grid-template-columns: 35% 10% 55%;
            grid-template-rows:auto;
           
            div:first-child{
                grid-area: 1 / 1 / 2 / 2;
            }
           
            div:nth-child(2){
                grid-area: 1 / 3 / 2 / 4;
                
               

            }
        }
        section:nth-child(even){
            grid-template-columns:55% 10% 35%;
            grid-template-row:1fr;
            
            div:first-child{
                grid-area: 1 / 3 / 2 / 4;

            }
            div:nth-child(2){
                grid-area: 1 / 1 / 2 / 2;
                padding-left:10%;
                
                
            }
        }
    }
    @media ${breakpoints.lg}{
        section{
            display:grid;
            flex-flow:column;
            justify-content:center;
            align-items:flex-start;
            width:70%;
            margin: 5rem auto;
            h3{
                margin-top:1rem;
            }
            p{
                width:100%;
                margin: 1rem 0;
            }
            a{
                margin-bottom:1rem;
            }
        }

        
    }
    @media ${breakpoints.md}{
        section{
            justify-content:center;
            align-items:center;
            margin:4rem auto;
            
            perspective: 1000px;

            h3{
                margin: 1.5rem 0;
            }
            p{
                margin:0 auto;
                margin-bottom:2rem;
                
            }
            a{
                margin-bottom: 1rem;
            }

            div:first-child{
                width: 100%;
                
                margin: 0 auto;

                div{
                    width:100%;
                }
            }
        }
    }
`