import React,{useState} from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const PasswordInput = (props) => {
  const { classes, label,id ,placeholder} = props;
  const [inputType, setInputType] = useState("password");
    function toggleInputType (){
      inputType==="text"? setInputType("password") : setInputType("text")
    }
    return (
        <div className={`relative ${classes}`}>
            <input
                type={inputType}
                id={id}
                className="peer bg-transparent input-feild !w-full"
                placeholder={placeholder}
            />
            <div className='absolute top-[1rem] right-[1rem]'>
             {  inputType==="password" && <RemoveRedEyeIcon className="text-light-white-800" onClick={toggleInputType}/>}
              { inputType==="text" && <VisibilityOffIcon className="text-light-white-800" onClick={toggleInputType}/>}
            </div>
            <label
                htmlFor={id}
                className="input-feild-label"
            >
                {label}
            </label>
    </div>
    );
}

export default PasswordInput;
