const React = require('react')

let Relax = require('./images/relax.jpg')



const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 style={myStyle}>Lo-Fi Cafe</h1>
                <nav>
                    <a href="/meals">Available Meals</a> | <a href="meals/new">Create a Meal</a>
                    
                </nav>
                
                <h3>Welcome to our Lo-Fi music themed cafe!</h3>
                <p>Pull up a seat and relax with a hearty meal while you listen to our carefully curated selection of lo-fi beats and melodies. Let the smooth, laid-back vibes transport you to a world of relaxation and peace. We hope you enjoy your time with us.</p>

                <img src={Relax} alt="Relax" />
            </div>)
    }
}

module.exports = Home