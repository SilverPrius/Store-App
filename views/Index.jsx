const React = require('react')
const DefaultLayout = require('./Default')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}


class Index extends React.Component {
    render() {
        const { allMeals } = this.props
        return (
            <div>
                <nav>
                    <a href="/">Home</a> | <a href="/meals/new">Create a New Meal</a>
                </nav>
                <h1 style={myStyle} >See All The Meals!</h1>
                <ul>
                    {allMeals.map((meals, i) => {
                        return (
                            <ul>
                                <h2><a href={`/meals/${meals.id}`}>
                                    {meals.name[0].toUpperCase() + meals.name.slice(1)}
                                </a></h2>
                                <a href={`/meals/${meals.id}`}>
                                    <img src={meals.image}></img></a><br />
                            </ul>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index