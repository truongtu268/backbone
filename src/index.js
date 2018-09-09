import makeButton from './button';
import {makeColor} from './button-styles';
import css from './footer.css';
import buttonStyle from './button.css';
import imageUrl from './girl.jpg';
import imageMaker from './image';
const image = imageMaker(imageUrl);
const button = makeButton("Yahoo");
button.style=makeColor("cyan");
const makeFooter = import(/* webpackChunkName:"footer" */'./footer');

button.addEventListener('click',e=>{
    makeFooter.then(footerModules=>{
        document.body.appendChild(footerModules.footer);
    });
});

document.body.appendChild(button);
document.body.appendChild(image);
