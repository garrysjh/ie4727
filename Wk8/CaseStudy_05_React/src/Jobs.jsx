import './styles/reset.css'
import './styles/jobs.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import JobForm from './components/JobForm.jsx';

function Jobs() {
  return (
    <div>
    <Navbar/>
    <div className="main-body">
        <div className="main-title">
            <h2> Jobs at JavaJam</h2>
            <p>Want to work at JavaJam? Fill out the form below to start your application. Required fields are marked with an asterisk *</p>
        </div>
        <JobForm/>
        <br/>
        <br/>
    </div>
      <Footer/>
      </div>
  )
}

export default Jobs
