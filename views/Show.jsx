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
                    <h2>{meals.quantity} remaining</h2>
                    <form action={`/meals/${meals.id}?_method=PUT`} method="POST">
                        <input type="hidden" name="name" defaultValue={meals.name} />
                        <input type="hidden" name="quantity" defaultValue={meals.quantity - 1} />
                        <input type="hidden" name="image" defaultValue={meals.image} />
                        <input type="hidden" name="price" defaultValue={meals.price} />
                        <input type="submit" value="BUY" />
                    </form> </div>
            } else {
                return (<div className='oos-message'><h2>SOLD OUT</h2></div>)
            }
        }
        return (
            <DefaultLayout title='Show Page'>
                <div>
                    < link rel='stylesheet' href='/css/nav.css' />
                    < link rel='stylesheet' href='/css/show.css' />

                    <h1 style={myStyle} >Enjoy your meal</h1>
                    <div className='item-info'>
                        <img src={meals.image}></img>
                        <div className='text-container'>
                            <h2>{meals.name[0].toUpperCase() + meals.name.slice(1)}</h2>

                            <p>{meals.description}</p>

                            <h2>${meals.price}</h2>

                            {outOfStock()} <br />

                            <button><a style={{ textDecoration: 'none' }} href={`/meals/${meals._id}/edit`}>EDIT</a></button>
                            
                            <form action={`/meals/${meals._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                        </div>
                        
                    </div>
                </div >
            </DefaultLayout>
        )
    }
}

module.exports = Show