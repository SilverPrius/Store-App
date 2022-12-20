const React = require('react')
const DefaultLayout = require('./Default.jsx')

// let Relax = require('./images/relax.jpg')



const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}

class Home extends React.Component {
    render() {
        return (
            <DefaultLayout title='Home Page'>
                < link rel='stylesheet' href='/css/nav.css' />
                < link rel='stylesheet' href='/css/home.css' />
                < link rel='stylesheet' href='/css/default.css' />

                {/* <div className='logo'>
                    <img id='logo' src='/images/longLogo.png' alt="logo" />
                </div> */}
                <h1 style={myStyle}>Welcome to our Lo-fi music themed restaurant!</h1>
                
                <div className='background'>
                    
                    <div className='welcome-text'>
                            <h3>SAVOR THE FLAVORS AND THE SOUNDS</h3>
                            <p>Pull up a seat and relax with a delicious meal while you listen to our carefully curated selection of lo-fi beats and melodies.</p>
                    </div>

                    {/* <div className='background'> */}
                    <div className='home-images'>
                    <div className='img menu'><a href='/meals '>MENU</a>
                    <h2>View our selection of available meals</h2>
                    </div>


                    <div className='img create'><a href='/meals/new '>CREATE</a>
                    <h2>Don't see a meal you're looking for? Help us expand our menu by creating a new meal!</h2>
                    </div>

                    </div>
                    </div>
                {/* </div> */}
            </DefaultLayout>


        )

    }
}

module.exports = Home