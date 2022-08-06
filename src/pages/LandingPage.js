import Bghome from '../assets/waysbuck_bg.jpg'
import '../styles/LandingPage.css'
import Bgfood from '../assets/food.png'
import Cards from '../components/LandingCards';

function LandingPage(){
    return(
        <div className="container" style={{marginTop: 60, marginBottom: 50}}>
            <div className="hero d-flex align-items-center position-relative"
                style={{backgroundImage: `url(${Bghome})`,backgroundRepeat: 'no-repeat'}}>
                <div className="hero-text">
                    <h1 className="waysbuck">WAYSBUCKS</h1>
                    <h4>
                    Things are changing, but we're still here for you
                    </h4>
                    <p style={{marginTop: 10}}>
                    We have temporarily closed our in-store cafes, but select grocery<br/>
                    and drive-thru locations remaining open.<br/><strong>Waysbucks</strong> Drivers is also available<br/>
                    <br/><br/>Let's Order...
                    </p>
                    <div class="position-absolute top-50 end-0 translate-middle-y">
                        <img src={Bgfood} alt='bg-food'/>
                    </div>
                </div>
            </div>
            <Cards/>
        </div>

    );
}

export default LandingPage;