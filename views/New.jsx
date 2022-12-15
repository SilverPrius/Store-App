const React = require('react')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}

class New extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <a href="/meals">Home</a>
                </nav>
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