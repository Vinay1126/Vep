import React from 'react'
// import { useNavigate } from 'react-router-dom'

export default function LastSteps(props) {
    // const navigate = useNavigate()
    const test = () => {
        console.log("hello")
        props.setCurrentPage(4);
    }
    const val = () => {
        console.log("hello")

    }
    return (


        <div className='lBody'>

            <div className="log1">
                <img className='limg1' src='\Images\Group 940.png' />
                <div className='leftCont'>
                    <h3>Few</h3>
                    <h2>Steps remaining</h2>
                    <br /><br />
                    <img className='leftImg limg2' src='\Images\undraw_profile_data_re_v81r.png' />
                </div>
            </div>
            <img className='lin1 midl' src='\Images\Line 9.png' />

            <div className='lrightcont'>
                <h4>Buisness Details</h4>
                <p>Provide your required business details for your <br /> account..</p>
                <br />
                <form onSubmit={test}>
                    <div className='formDiv'>
                        <div className='div2'>

                            <input onChange={val} className='div3' type='text' placeholder='Enter Company Name'></input>
                        </div>
                    </div>
                    <br />
                    <div className='formDiv'>
                        <div className='div2'>
                            <select className='div3 col1' name="dog-names" id="dog-names">
                                <option value="rigatoni">Select business type</option>
                                <option value="dave">Commercial</option>
                                <option value="pumpernickel">Private</option>

                            </select>
                        </div>
                    </div>
                    <br />

                    <img onClick={test} className='icn larrow icn5' src='\Images\Vector (10).png'></img>
                    <input type="submit" value="NEXT" className='btn1' />
                </form>

            </div>
        </div >

    )
}
