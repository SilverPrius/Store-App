const React = require('react')
const DefaultLayout = require('./Default')


class Index extends React.Component {
    render() {
        const { allMeals } = this.props
        return (
            <DefaultLayout title='Index Page'>
            <div>
                < link rel='stylesheet' href='/css/nav.css' />
                < link rel='stylesheet' href='/css/index.css' />
                
                {/* <div className='menuBackground'> */}
                    <div class='message'>
                        <h1>See All The Meals!</h1>
                    </div>
                    <div className='container'>
                        {allMeals.map((meals, i) => {
                            return (
                                <div className='menuItem'>
                                    <h2><a href={`/meals/${meals.id}`}>
                                        {meals.name[0].toUpperCase() + meals.name.slice(1)}
                                    </a></h2>
                                    <h2>${meals.price}</h2>
                                    {/* <p className='description'>{meals.description}</p> */}
                                    <div className='img'>
                                        <a href={`/meals/${meals.id}`}>
                                            <img src={meals.image}></img></a>
                                    </div><br />
                                </div>
                            )
                        })}
                    </div>
                {/* </div> */}
            </div >
            </DefaultLayout>
        )
    }
}

module.exports = Index