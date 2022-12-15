const React = require('react')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
}

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <nav>
                    <a href="/meals">Home</a> | <a href="/meals/new">Create a New Meal</a>
                </nav>
                <head><title>{this.props.title}</title></head>
                <body>
                    <h1 style={myStyle}>{this.props.title}</h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout