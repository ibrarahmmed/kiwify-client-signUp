import React from 'react';
import logo from "../image/kiwify-green-logo.png"

const login = () => {
    return (
        <div>
            <div id='layout'>
                <div className='class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"'>
                    <div>
                        <div className='class="sm:mx-auto sm:w-full sm:max-w-md"'>
                            <img src={logo} alt="" className='mx-auto h-12 w-auto' />
                            <h2 className='"mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>Criar nova conta</h2>
                            <p className='mt-2 text-center text-base leading-5 text-gray-600'>
                                Ou   <a href="/login" className='"font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"'>entrar na sua conta existente</a>
                            </p>

                        </div>
                        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                                <div>
                                    <label className='block text-start text-sm font-medium leading-5 mb-1 text-gray-700'>E-mail</label>
                                    <div>
                                        <input type="text" className='form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full' autoComplete='off' name='null' />
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <label className='block text-start text-sm font-medium leading-5 mb-1 text-gray-700'>Repetir e-mail</label>
                                    <div>
                                        <input type="email" className='form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full' autoComplete='off' name='null' />
                                    </div>

                                </div>
                                <div className='mt-6'>
                                    <label className='block text-start text-sm font-medium leading-5 mb-1 text-gray-700'>Senha</label>
                                    <div>
                                        <input type="email" className='form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full' autoComplete='off' name='null' />
                                    </div>

                                </div>

                                <div className="mt-6">
                                    <label className="relative flex items-start mt-2">
                                        <div classNmae="flex items-center h-5">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer" />
                                        </div>
                                        <div className="ml-2 text-sm leading-5">
                                            <span className="font-medium text-gray-700">
                                                Eu li e aceito os
                                                <a href="/" target="_blank" className="underline"> termos de uso</a>
                                                ,
                                                <a href="/" target="_blank" className="underline"> termos de licença de uso de software</a>
                                                ,
                                                <a href="/" target="_blank" classname="underline"> política de conteúdo</a>
                                                da Kiwify
                                            </span>
                                        </div>
                                    </label>
                                </div>

                                <div className="mt-6">
                                    <span className="block w-full rounded-md shadow-sm">
                                        <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"> Criar conta
                                        </button>
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default login;