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
                
                <h1 style={myStyle}>Lo-Fi Cafe</h1>
                
                <div ><h3>Welcome to our Lo-Fi music themed cafe!</h3>
                <p>Pull up a seat and relax with a hearty meal while you listen to our carefully curated selection of lo-fi beats and melodies. Let the smooth, laid-back vibes transport you to a world of relaxation and peace. We hope you enjoy your time with us.</p></div>
            </div>
            </DefaultLayout>


        )

    }
}

module.exports = Home