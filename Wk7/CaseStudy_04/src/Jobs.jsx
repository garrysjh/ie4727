import './styles/reset.css'
import './styles/jobs.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function Jobs() {
  return (
    <div>
    <Navbar/>
    <div className="main-body">
        <div className="main-title">
            <h2> Jobs at JavaJam</h2>
            <p>Want to work at JavaJam? Fill out the form below to start your application. Required fields are marked with an asterisk *</p>
        </div>
        <form method="get" action="show_get.php">
            <table>
                <tr>
                    <td ><label htmlFor="name">*Name:</label></td>
                    <td><input type="text" name="name" size="25" required placeholder="Enter your name here"/><br/></td>
                </tr>
                <tr>
                    <td><label htmlFor="email">*E-mail:</label></td>
                    <td><input type="text" name="email" size="25" required placeholder="Enter your Email-ID here"/><br/>                                </td>
                </tr>
                <tr>
                    <td><label htmlFor="startDate">Start Date:</label></td>
                    <td><input type="date" name="startDate"/><br/></td>
                </tr>
                <tr>
                    <td><label htmlFor="experience">*Experience:</label></td>
                    <td><textarea type="textarea" name="experience" rows="4" cols="40" required placeholder="Enter your past experience here"></textarea><br/></td>
                </tr>
            </table>
            <input type="reset" value="Clear"/><br/><br/>
            <input type="submit" value="Apply Now"/><br/><br/>
         </form>
        <br/>
        <br/>
    </div>
      <Footer/>
      </div>
  )
}

export default Jobs
