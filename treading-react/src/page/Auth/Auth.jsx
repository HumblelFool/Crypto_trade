import React from 'react'
import "./Auth.css"
import SignupForm from './SignupForm'
import { Button } from '@/components/ui/button'
import { useLocation, useNavigate } from 'react-router-dom'

import SigninForm from './SigninForm'
import ForgotPassword from './ForgotPassword'
const Auth = () => {

    const navigate = useNavigate()

    const location = useLocation()
    return (
        <div className='h-screen relative authContainer'>
            <div className='absolute top-0 right-0 left-0 bottom-0 bg-[#030712]
            bg-opacity-50'>
                <div className='bgblure absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white '>
                    <h1 className='text-6xl font-bold'>TiTtle</h1>



                    {location.pathname == "/signup" ? (


                        <section className='w-full'>
                            <SignupForm />
                            <div className='flex items-center justify-center'>
                                <span>have already Account?</span>
                                <Button variant="ghost"
                                    onClick={() => navigate("/signin")}
                                >
                                    Signin
                                </Button>
                            </div>
                        </section>


                    ) : location.pathname == "/forgot-password" ? (


                        <section className='w-full'>

                            <ForgotPassword />
                            <div className='flex items-center justify-center'>
                                <span>Back To login</span>
                                <Button variant="ghost"
                                    onClick={() => navigate("/signin")}
                                >
                                    Login
                                </Button>
                            </div>

                        </section>



                    ) : (

                        <section className='w-full'>
                            <SigninForm />
                            <div className='flex items-center justify-center'>
                                <span>dont't have Account?</span>
                                <Button variant="ghost"
                                    onClick={() => navigate("/signup")}
                                >
                                    Signup
                                </Button>
                            </div>


                            <div className='flex items-center justify-center'>

                                <Button
                                    className="w-full py-5"
                                    variant="outline"
                                    onClick={() => navigate("/forgot-password")}
                                >
                                    Forgot Password
                                </Button>
                            </div>

                        </section>)}
                </div>
            </div>

        </div>
    )
}

export default Auth