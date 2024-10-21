    function Navbar() {
        return (
            <>
                <header>
                    <div className="logo">
                        <h1>JavaJam Coffee House</h1>
                    </div>
                </header>
                <nav>
                    <div className="navbar-item">
                        <a href="/">Home</a> &nbsp;
                    </div>
                    <div className="navbar-item">
                        <a href="menu">Menu</a>&nbsp;
                    </div>
                    <div className="navbar-item">
                        <a href="music">Music</a>&nbsp;
                    </div>
                    <div className="navbar-item">
                        <a href="jobs">Jobs</a>&nbsp;
                    </div>
                </nav>
            </>
        );
    }

    export default Navbar;