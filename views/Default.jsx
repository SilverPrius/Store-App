const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>

                <head><title>{this.props.title}</title></head>

                <body>
                    < link rel='stylesheet' href='/css/default.css' />
                    < link rel='stylesheet' href='/css/nav.css' />
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/meals">Menu</a></li>
                            <li><a href="/meals/new">Create a New Meal</a></li>
                        </ul>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout