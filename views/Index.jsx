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
                < link rel='stylesheet' href='/css/nav.css' />
                < link rel='stylesheet' href='/css/index.css' />
                <nav>
                    <div class='lofiCafe'>Lo-Fi Cafe</div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/meals">Menu</a></li>
                        <li><a href="/meals/new">Create a New Meal</a></li>
                    </ul>
                </nav> <br />
                <h1 style={myStyle} >See All The Meals!</h1>
                <ul>
                    {allMeals.map((meals, i) => {
                        return (
                            <ul>
                                <div className='menuContainer'>
                                    <div className='menuCard'>
                                        <div className='mealsName'>
                                            <h2><a href={`/meals/${meals.id}`}>
                                                {meals.name[0].toUpperCase() + meals.name.slice(1)}
                                            </a></h2>
                                        </div>
                                        <div className='menuImages'>
                                            <a href={`/meals/${meals.id}`}>
                                                <img src={meals.image}></img></a>
                                        </div><br />
                                    </div>
                                </div>
                            </ul>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index