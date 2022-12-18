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


                <div className='background'>

                    < link rel='stylesheet' href='/css/home.css' />

                    {/* <h1 style={myStyle}>SAVOR THE FLAVORS AND THE SOUNDS</h1> */}

                    {/* <div className='welcome-text'>
                        <h3>Pull up a seat and relax with a delicious meal while you listen to our carefully curated selection of lo-fi beats and melodies.
                            Let the smooth, laid-back vibes transport you to a world of relaxation and peace. We hope you enjoy your time with us.</h3>
                    </div> */}
                    <div className='home-images'>
                    <div className='image1'></div>
                    <div className='image2'></div>
                    <div className='image3'></div>
                    <div className='image4'></div>
                    </div>
                </div>
            </DefaultLayout>


        )

    }
}

module.exports = Home