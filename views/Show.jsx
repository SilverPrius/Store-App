const React = require('react')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}


class Show extends React.Component {
    render() {
        const { meals } = this.props
        let buyFunction = () =>{meals.quantity -= 1}
        return (
            <div>
                <nav>
                    <a href="/">Home</a> | <a href="/meals">Menu</a> | <a href="/meals/new">Create a New Meal</a>
                </nav>
                <h1 style={myStyle} >Enjoy your meal</h1>
                <h2>{meals.name[0].toUpperCase() + meals.name.slice(1)}</h2>
                <img src={meals.image}></img>
                <h2>${meals.price}</h2>
                <h2>{meals.quantity} remaining</h2> <br />
                {/* <button onclick= {buyFunction}><a style={{ textDecoration: 'none' }} href={`/meals/${meals._id}`}>BUY</a></button>  */}
                <form action={`/meals/${meals.id}?_method=PUT`} method="POST">
                    <input type="hidden" name="name" defaultValue={meals.name}/>
                    <input type="hidden" name="quantity" defaultValue={meals.quantity - 1}/>
                    <input type="hidden" name="image" defaultValue={meals.image}/>
                    <input type="hidden" name="price" defaultValue={meals.price}/>
                    <input type="submit" value="BUY"/>
                </form>

                <button><a style={{ textDecoration: 'none' }} href={`/meals/${meals._id}/edit`}>EDIT</a></button>
                <form action={`/meals/${meals._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form>
            </div >
        )
    }
}

module.exports = Show