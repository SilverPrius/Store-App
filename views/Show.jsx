const React = require('react')
const DefaultLayout = require('./Default.jsx')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}


class Show extends React.Component {
    render() {
        const { meals } = this.props
        const outOfStock = () => {
            if (meals.quantity > 0) {
                return <div>
                    <h2>{meals.quantity} remaining</h2> <br />
                    <form action={`/meals/${meals.id}?_method=PUT`} method="POST">
                        <input type="hidden" name="name" defaultValue={meals.name} />
                        <input type="hidden" name="quantity" defaultValue={meals.quantity - 1} />
                        <input type="hidden" name="image" defaultValue={meals.image} />
                        <input type="hidden" name="price" defaultValue={meals.price} />
                        <input type="submit" value="BUY" />
                    </form> </div>
            } else {
                return (<div>OUT OF STOCK</div>)
            }
        }
        return (
            <DefaultLayout title='Home Page'>
            <div>
                < link rel='stylesheet' href='/css/nav.css' />

                <h1 style={myStyle} >Enjoy your meal</h1>

                <h2>{meals.name[0].toUpperCase() + meals.name.slice(1)}</h2>

                <img src={meals.image}></img>

                <h2>${meals.price}</h2>

                {outOfStock()}

                <button><a style={{ textDecoration: 'none' }} href={`/meals/${meals._id}/edit`}>EDIT</a></button>
                <form action={`/meals/${meals._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>

            </div >
            </DefaultLayout>
        )
    }
}

module.exports = Show