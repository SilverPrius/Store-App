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
                < link rel='stylesheet' href='/css/new.css' />
                <h1 style={myStyle}>New Meals Page</h1>
                <form action="/meals" method="POST"><h2>
                    Name: <input type="text" name="name" />
                    <br></br>
                    Quantity: <input type='number' name='quantity' />
                    <br />
                    Image: <input type="text" name="image" />
                    <br />
                    Price: <input type='number' name='price' />
                    <br />
                    Description: <input type="text" name="description" />
                    <br></br>
                    <input className='create-button' type="submit" name="" value="Create Meal" />
                </h2></form>
            </div>
            </DefaultLayout>
            )
    }
}

module.exports = New