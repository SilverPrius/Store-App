const React = require('react')
// As you can see we are using the app layout
const DefaultLayout = require('./Default.jsx')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}

class Edit extends React.Component {
    render() {
        const {meals} = this.props
        return (
            <DefaultLayout title="Edit Page">
                < link rel='stylesheet' href='/css/nav.css' />
                < link rel='stylesheet' href='/css/edit.css' />
                <h1 style={myStyle}>Edit Page</h1>
                {/* < link rel='stylesheet' href='/css/app.css' /> */}
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
                <form action={`/meals/${meals.id}?_method=PUT`} method="POST"><h2>
                    Name: <input type="text" name="name" defaultValue={meals.name} /><br />
                    Quantity: <input type="number" name="quantity" defaultValue={meals.quantity} /><br />
                    Image: <input type="text" name="image" defaultValue={meals.image} /><br />
                    Price: <input type="number" name="price" defaultValue={meals.price} /><br />
                    Description: <input type="text" name="description" defaultValue={meals.description} /><br />
                    <input className='submit-button' type="submit" value="Submit Changes" />

                </h2></form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit