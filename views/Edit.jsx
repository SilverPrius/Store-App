const React = require('react')
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component {
    render() {
        const { meals } = this.props
        return (
            <DefaultLayout title="Edit Page">
                < link rel='stylesheet' href='/css/nav.css' />
                < link rel='stylesheet' href='/css/edit.css' />
                <div className='logo'></div>
                <form action={`/meals/${meals.id}?_method=PUT`} method="POST"><h2>
                    Name: <input type="text" name="name" defaultValue={meals.name} /><br />
                    Quantity: <input type="number" name="quantity" defaultValue={meals.quantity} /><br />
                    Image: <input type="text" name="image" defaultValue={meals.image} /><br />
                    Price: <input type="number" name="price" defaultValue={meals.price} /><br />
                    Description: <input type="text" name="description" defaultValue={meals.description} /><br />
                    <input className='submit-button' type="submit" value="Submit Edits" />
                </h2></form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit