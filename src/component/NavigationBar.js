import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FormTable from './FormTable';
import RegisterNew from './RegisterNew';
import LoginNew from './LoginNew';
import HomeNew from './HomeNew';
import Footer from '../pages/Footer';
const Home = () => {
    return (
        <div>
           
            <HomeNew />
        </div>
    );
    
}
const About = () => {
    
    return (
        <div><div class="container">
            <h1>Who We Are</h1>
            <p class="text-justify">
                Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios, and The Climate Pledge are some of the things pioneered by Amazon.</p>
            <p>Amazon’s “Day 1” mentality is our approach of doing everything with the energy and entrepreneurial spirit of a new organisation on its first day.
                Working to earn and keep our customers’ trust is the single biggest driver of Amazon’s Day 1 approach. Amazon’s decision-making process asks employees to consider whether an action is a one-way door—consequential and nearly irreversible—or a two-way door, easy to change course and go back. Discover more about who we are through our Annual Letters to Shareholders from 1997 through today.
            </p>

        </div><div> <Footer /></div></div>
    );
    
}

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
          
            <p>First Login the Page and then submit the Contact form</p>
            
            <button onClick={() => navigate('/login') }className='btn btn-primary'>Login</button>

            <center><h1>Contact Form</h1></center>
            <FormTable />
            
            
        </div>
    );
}
const Login = () => {
    return (
        <div>
            <LoginNew />
        </div>
    );
}

const Register = () =>{


    return (
        <div>
           <center> <legend>REGISTRATION FORM</legend></center>
            
            <RegisterNew />
        </div>
    );
}


export default function NavigationBar() {
    
    return (
        <div>
            <Router>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link to="/about" className='nav-link'>About</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link to="/contact" className='nav-link'>Contact</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link to="/register" className='nav-link'>Register</Link>
                    </li>
                    <li className='nav-item active'>
                        <Link to="/login" className='nav-link'>Login</Link>
                    </li>
                </ul>
                </nav>

               <Routes>

                <Route  exact path = "/"  element = {<Home/>}/>
                <Route  exact path = "/about"  element = {<About/>}/>
                <Route  exact path = "/contact"  element = {<Contact/>}/>
                <Route  exact path = "/register"  element = {<Register/>}/>
                <Route  exact path = "/login"  element = {<Login/>}/>
                <Route path = "/login" element = {<Login/>}/>
               </Routes>

            </Router>
        </div>
    );
}