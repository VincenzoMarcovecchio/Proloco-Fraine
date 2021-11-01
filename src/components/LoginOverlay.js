import React, { useState, useEffect } from 'react'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useForm } from "react-hook-form";
import { navigate, Link } from 'gatsby';


export default function LoginForm({ navigateTarget }) {

  const identity = useIdentityContext()
  const { register, handleSubmit, errors } = useForm()
  const [formError, setFormError] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)

  // When cold-loading a PrivateContent page, the user can get redirected to
  // /login, but once the User hydrates from LocalStorage, we want to send them
  // back ASAP
  useEffect(() => {
    navigateTarget && identity.user && navigate(navigateTarget)
  }, [navigateTarget, identity.user])

  const onSubmit = async (data) => {
    setLoggingIn(true)
    setFormError(false)

    await identity
      .login({ email: data.email, password: data.password })
      .then(() => {
        setLoggingIn(false)
        navigateTarget && navigate(navigateTarget)
      })
      .catch(e => {
        setLoggingIn(false)
        setFormError(e.message)
      })
  }

  return (
    identity.user
      ? <div className="">
        <p>You are already signed in</p>
        <p>You may need to change accounts if you're looking to access further private data</p>
      </div>
      : identity.provisionalUser ?
        <div className="">
          <p>Your account has not yet been confirmed. Please check your email</p>
        </div>
        : <div className="">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <label htmlFor="email" className="">
                Email
            </label>
              <input
                ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                className={` ${loggingIn && 'disabled'}`}
                type="text"
                placeholder="jane@doe.com"
                name="email">
              </input>
              {errors.email && <p className="">Email is required</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="">
                Password
            </label>
              <input
                ref={register({ required: true })}
                className={` ${loggingIn && 'disabled'}`}
                name="password"
                type="password"
                placeholder="******************">
              </input>
              {errors.password && <p className="">Password is required</p>}
            </div>
            <div className="">
              <button
                className={` ${loggingIn && 'opacity-50 cursor-not-allowed'}`}
                type="submit">
                Sign In
              </button>
              <Link className="" to="/forgot-password/">
                Forgot Password?
              </Link>
            </div>
            <div className="pt-2">
              {formError && <p className="">{formError}</p>}
            </div>
          </form>
        </div>

  )
}