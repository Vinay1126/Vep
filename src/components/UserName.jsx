import React from 'react'
// import { useNavigate } from 'react-router-dom'

export default function UserName(props) {
    // const navigate = useNavigate()
    const test = () => {
        console.log("hello")
        props.setCurrentPage(5);
    }
    const val = () => {
        console.log("hello")

    }
    return (


        <div className='lBody'>

            <div className="log1">
                <img className='limg1' src='\Images\Group 940.png' />
                <div className='leftCont'>
                    <h3>Let's</h3>
                    <h2>Get Started!</h2>
                    <br /><br />
                    <img className='leftImg Uimg2' src='\Images\undraw_account_re_o7id.png' />
                </div>
            </div>
            <img className='lin1 midl' src='\Images\Line 9.png' />

            <div className='lrightcont'>
                <br /><br />
                <h4>Set up your username</h4>

                <br />
                <form onSubmit={test}>
                    <div className='formDiv'>
                        <div className='div2'>
                            {/* <img className='gap' src='\Images\Group.png'></img> */}
                            <span className='gap'>vep.me/</span>
                            <img className='Umidtxt' src='\Images\Line 8.png'></img>
                            <input className='div3 div5' type='tel' placeholder='Enter username'></input>
                        </div>
                    </div>
                    <br />
                    <p>This will be the unique name using which other users can <br /> find and pay you.</p>
                    <br />

                    <input type="submit" value="PROCEED" className='btn1' />
                </form>

            </div>
        </div >

    )
}
