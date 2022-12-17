const React = require('react')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head><title>{this.props.title}</title></head>
                <body>
                <div>
            < link rel='stylesheet' href='/css/nav.css' />
                <nav>
                    <div class='lofiCafe'>Lo-Fi Cafe</div>
                    <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/meals">Menu</a></li>
                    <li><a href="/meals/new">Create a New Meal</a></li> 
                    </ul>
                </nav> <br />
            </div>
                    <h1 style={myStyle}>{this.props.title}</h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout