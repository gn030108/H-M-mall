import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = ({authenticate, setAuthenticate}) => {

  const navigate = useNavigate()
  const [side,setSide] = useState(false);

  const menu = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']

  const goLogin=()=>{
    navigate("/login")
  }
  const logOut=()=>{
    setAuthenticate(false)
  }
  const goHome=()=>{
    navigate("/")
  }
  const search = (event)=>{
    if (event.key==="Enter"){
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
      <div className='bar'>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className='login_button'>
        <FontAwesomeIcon icon={faUser} />
        {authenticate ? (
          <div onClick={logOut}>로그아웃</div>
        ):(
          <div onClick={goLogin}>로그인</div>
        )}
      </div>
      <div className='nav_section'>
        <img onClick={goHome} alt='img' width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0762h5YBq4ChgVskhr9CivPGQfvnolEt1b5hDHJURhsHEyBATBcVOcXbz_QMK7upBdg&usqp=CAU'/>
      </div>
      <div className='menu_area'>
        <ul className='menu_list'>
          {menu.map((menu,index)=>(<li key={index}>{menu}</li>))}
        </ul>
        <div className='search_area'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' onKeyDown={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar