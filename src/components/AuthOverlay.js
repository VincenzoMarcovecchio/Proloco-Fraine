import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";

import { useIdentityContext } from 'react-netlify-identity-gotrue'
import LoginForm from './LoginForm'

const AuthOverlay = () => {
  const identity = useIdentityContext()

  const { register, handleSubmit, errors } = useForm()
  const [formError, setFormError] = useState()
  const [formProcessing, setFormProcessing] = useState(false)
  const [forceShowOverlay, setForceShowOverlay] = useState(false)

  useEffect(() => {
    if (identity.provisionalUser) {
      setForceShowOverlay('Please check your email for an account confirmation email!')
      const timeoutId = setTimeout(() => setForceShowOverlay(false), 5000)
      return () => clearTimeout(timeoutId)
    }
  }, [identity.provisionalUser])

  const onSubmit = async (data) => {
    setFormProcessing(true)
    setFormError()

    await identity.completeUrlTokenTwoStep(data)
      .catch(_ => setFormError('Having an issue.. please try later'))

    setFormProcessing(false)
  }

  return (
    <>
      {(identity.urlToken || forceShowOverlay) &&
        <div className="">
          <div className="">

            {identity.urlToken?.type === "confirmation" &&
              <p>Confirming User...</p>
            }
            {identity.urlToken?.type === "email_change" && (
              identity.user
                ? <p>Changing Email...</p>
                : <>
                  <p>In order to confirm your email change, you must log in with your prior credentials.</p>
                  <LoginForm />
                </>
            )}
            {forceShowOverlay &&
              <p>{forceShowOverlay}</p>
            }
            {(identity.urlToken?.type === "passwordRecovery" || identity.urlToken?.type === "invite") &&
              <>
                {identity.urlToken.type === "passwordRecovery" &&
                  <h2>Reset Password</h2>
                }
                {identity.urlToken.type === "invite" &&
                  <>
                    <h2>Welcome</h2>
                    <p className="">Let's complete the rest of your account info</p>
                  </>
                }
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  {identity.urlToken.type === "invite" &&
                    <div className="">
                      <label htmlFor="user_metadata.full_name" className="">
                        Name
                      </label>
                      <input
                        ref={register({ required: true })}
                        className={` ${formProcessing && 'opacity-75'}`}
                        disabled={formProcessing}
                        name="user_metadata.full_name"
                        type="text"
                        placeholder="Jane Doe">
                      </input>
                      {errors.password && <p className="">Password is required</p>}
                    </div>
                  }
                  <div className="mb-6">
                    <label htmlFor="password" className="">
                      New Password
                    </label>
                    <input
                      ref={register({ required: true })}
                      className={` ${formProcessing && 'opacity-75'}`}
                      disabled={formProcessing}
                      name="password"
                      type="password"
                      placeholder="******************">
                    </input>
                    {errors.password && <p className="">Password is required</p>}
                  </div>
                  <div className="">
                    <button
                      className={` ${formProcessing ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                      disabled={formProcessing}
                      type="submit">
                      Set New Password
                </button>
                  </div>
                  {formError &&
                    <div className="">
                      <p className="">Oops! We're having trouble right now.</p>
                    </div>
                  }
                </form>
              </>
            }
          </div>
        </div>
      }
    </>
  )
}

export default AuthOverlay