const React = require('react')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}

class New extends React.Component {
    render() {
        return (
            <div>
                < link rel='stylesheet' href='/css/nav.css' />
                <nav>
                    <div class='lofiCafe'>Lo-Fi Cafe</div>
                    <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/meals">Menu</a></li>
                    <li><a href="/meals/new">Create a New Meal</a></li> 
                    </ul>
                </nav> <br />
                <h1 style={myStyle}>New Meals page</h1>
                <form action="/meals" method="POST">
                    Name: <input type="text" name="name" />
                    <br />
                    Quantity: <input type='number' name='quantity' />
                    <br />
                    Image: <input type="text" name="image" />
                    <br />
                    Price: <input type='number' name='price' />
                    <br />
                    <input type="submit" name="" value="Create Meal" />
                </form>
            </div>)
    }
}

module.exports = New