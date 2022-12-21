const React = require('react')
const DefaultLayout = require('./Default')


class Index extends React.Component {
    render() {
        const { allMeals } = this.props
        return (
            <DefaultLayout title='Index Page'>
                < link rel='stylesheet' href='/css/nav.css' />
                < link rel='stylesheet' href='/css/index.css' />

                <div className='logo'></div>
                <div className='container'>

                    {allMeals.map((meals, i) => {
                        return (
                            <div className='menuItem'>

                                <h2 className='meal-name' ><a style={{ textDecoration: 'none' }} href={`/meals/${meals.id}`}>
                                    {meals.name[0].toUpperCase() + meals.name.slice(1)}
                                </a></h2>
                                <h2 className='meal-price' >${meals.price}</h2>
                                <div className='img'>
                                    <a href={`/meals/${meals.id}`}>
                                        <img src={meals.image}></img></a>
                                </div><br />
                            </div>
                        )
                    })}
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index