const React = require('react')
// As you can see we are using the app layout
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component {
    render() {
        const {meals} = this.props
        return (
            <DefaultLayout title="Edit Page">
                {/* < link rel='stylesheet' href='/css/app.css' /> */}
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
                <form action={`/meals/${meals.id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={meals.name} /><br />
                    Quantity: <input type="number" name="quantity" defaultValue={meals.quantity} /><br />
                    Image: <input type="text" name="image" defaultValue={meals.image} /><br />
                    Price: <input type="number" name="price" defaultValue={meals.price} /><br />
                    Description: <input type="text" name="description" defaultValue={meals.description} /><br />
                    <input type="submit" value="Submit Changes" />

                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit