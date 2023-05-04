import NavbarComponent from "../components/NavbarComponent"

const AboutPage = () => {
    return (
        <div>
            <NavbarComponent />
            <div className="container">
                <div className="wrapper">
                    <div class="jumbotron">
                        <h1 class="display-4">Hello, Cuties!</h1>
                        <p class="lead">Why let a world that loves to police your wardrobe and your expression get the upper hand, anyway?

                            So the next time someone says ‘Oh, that dress is too bold’ ‘Are you sure you’re the right size for this?’ ‘Maybe you should pick a colour that suits you’ or ‘Act your age and wear something else’, go ahead and do exactly what you please. When it comes to great style and personal expression, there should never be any regrets.</p>
                        <hr class="my-4" />
                        <p className="lead">With the trendiest, freshest, and most unique styles from across India and the world, We invite you to express your personal style fearlessly, and with a confidence and optimism that cannot be easily shaken.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutPage
