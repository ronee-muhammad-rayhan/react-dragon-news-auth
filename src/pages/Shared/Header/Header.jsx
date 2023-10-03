import img from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div>
            <img src={img} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;