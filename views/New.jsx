const React = require('react')
const DefaultLayout = require('./Default.jsx')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title='New Page'>
            <div>
                < link rel='stylesheet' href='/css/nav.css' />
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
            </div>
            </DefaultLayout>
            )
    }
}

module.exports = New