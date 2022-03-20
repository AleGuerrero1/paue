import React, { Fragment } from "react";

class Footer extends React.Component {
    render() {
        return (
            <Fragment>
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2021</span>
                        </div>
                    </div>
                </footer>
            </Fragment>
        );
    }
}
export default Footer;