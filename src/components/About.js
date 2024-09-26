import React from "react";

import "./About.css";

import me from "./img/dan.jpeg";
import me2 from "./img/Daniel2.png";
import me3 from "./img/Daniel2b.png";
import me4 from "./img/Ddan.png";

function About() {
    return (
        <div className="main-about">
            <div className="details">
                <h3>My name is <i>Daniel Omolaja</i></h3>
                <p>I'm a Front-end Developer and Graphic Designer with 6 months of experience in development and 3 years in design. 
                My passion lies in creating visually compelling and user-friendly digital experiences. 
                I recently completed a 100-day coding challenge to sharpen my coding skills and regularly share my journey on LinkedIn. 
                I’m excited to combine my design and development expertise to build innovative solutions.</p>
                <div className="btn">
                    <button>Front-end Dev</button>
                    <button>Graphic Design</button>
                </div>
            </div>
            <div className="img">
                <img src={me4} alt="Daniel" />
            </div>
        </div>
    )
}

// function Page() {
//     return (
//         <div className="main">
//             <div className="imgpage">
//                 <img src={me3} alt="dan" />
//             </div>
//             <div className="info">
//                 <h1>About Me</h1>
//                 <h3>Frontend Developer</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis 
//                 parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede 
//                 justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
//                 pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, 
//                 eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean 
//                 imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, 
//                 sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante 
//                 tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla 
//                 mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
//             </div>
//         </div>
//     )
// }

export default About;