import React from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
const FrequentlyAskedQustion = (props) => {
    const {title,questions}=props
    const QbgColor ={
        "Danger":"error.main",
        "Info":"info.main",
        "Success":"success.main" 
    }
    return (
        <div className='container'>
                 <div className='my-80'>
                    <div className='my-10'>
                        <h1 className="main-heading-primary-gray text-center">
                            {title}
                        </h1>
                    </div>
            <div>
                {
                    questions.map((ele,ind)=>{
                        return <div className='questions my-20'>
                                <h1 className='pt-10 pb-5'>
                                    <QuestionMarkIcon
                                        sx={{ bgcolor: QbgColor[questions[ind].type] }}
                                    />
                                         <span className='main-heading-primary-gray text-[2.2rem] pl-10'>{ele.number}</span>
                                </h1>
                               {
                                ele.question.map((e,i)=>{
                                        return  <p className='mb-10 main-paragraph-gray text-justify text-[1.5rem] font-[500] leading-6	'>{e}</p>
                                    })
                               }
                        </div>
                    })
                }
            </div>
        </div>
        </div>
       
    );
}

export default FrequentlyAskedQustion;
