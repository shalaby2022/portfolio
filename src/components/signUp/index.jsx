import { useForm, Controller } from "react-hook-form"
import  ReactSelect  from 'react-select'
import './signup.css'

const SignUp = () => {

    const  { register, handleSubmit , formState: { errors} , control , watch , reset } = useForm()

    const Submit = data => {
        reset()
    }

    const selectOptions = [
        {
            value:1,
            label:"Reading"
        },
        {
            value:2,
            label:"Football"
        },
        {
            value:3,
            label:"Swimming"
        },
        {
            value:4,
            label:"Computer Gamings"
        },
        {
            value:5,
            label:"Drawing"
        }
    ]

    const selectGender = [
        {
            value:1,
            label:"Male"
        },
        {
            value:2,
            label:"Female"
        }
    ]

    return <div style={{minHeight: '100vh'}} className="signUp">
        <div className="pt-5">
        <div className="w-50 mx-auto py-3 border rounded p-4 bg-dark text-secondary mb-3">
        <form onSubmit={handleSubmit(Submit)} noValidate>
            <legend className="text-center text-primary fs-4 ">Register Now</legend>
            <fieldset className="">
                <label htmlFor="Email">Email</label>
                <input type="Email" id="Email" placeholder="Enter your Email" className="form-control"  {...register("Email" ,{ 
                    required: true ,
                    pattern: ' //^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'
                })}/>
                {
                    ( errors.Email && errors.Email.type === "required" )
                    && 
                    <p className="text-danger my-1">Email Is Required</p>
                }
                {
                    ( errors.Email && errors.Email.type === "pattern" )
                    && 
                    <p className="text-danger my-1">Please Enter Valid Pattern</p>
                }
            </fieldset>
            
            <fieldset className="my-4">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter Your Password" className="form-control" {...register("password" , {
                    required: true,
                    minLength: 10,
                    maxLength: 20
                })}/>
                {
                    ( errors.password && errors.password.type === "required" )
                    && 
                    <p className="text-danger my-1">Password Is Required</p>
                }
                {
                    ( errors.password && errors.password.type === "minLength" )
                    && 
                    <p className="text-danger my-1">Min Length is 10</p>
                }
                {
                    ( errors.password && errors.password.type === "maxLength" )
                    && 
                    <p className="text-danger my-1">Max Length is 20</p>
                }
            </fieldset>

            <fieldset className="my-4">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm Your Password" className="form-control" {...register("confirmPassword" , {
                    required: true,
                    validate: (val) => {
                        if (watch('password') != val) {
                            return "Your passwords do not match"
                        }
                    },
                })}/>
                {
                    ( errors.confirmPassword && errors.confirmPassword.type === "required" )
                    && 
                    <p className="text-danger my-1">Password Is Required</p>
                }
                {
                    ( errors.confirmPassword && errors.confirmPassword.message  )
                    && 
                    <p className="text-danger my-1">{errors.confirmPassword.message}</p>
                }
            </fieldset>

            <fieldset className="my-5">
                <Controller
                    name="select Hoppies"
                    control={control}
                    render={({ field }) => <ReactSelect
                        {...field}
                        options={selectOptions}
                        isMulti
                        isSearchable
                        placeholder="Select Your Hoppies"
                    />}
                />
            </fieldset>

            <fieldset className="mt-5">
                <Controller
                    name="selectGender"
                    control={control}
                    rules= {{required: true}}
                    render={({ field }) => <ReactSelect
                        {...field}
                        options={selectGender}
                        placeholder="SelectGender"
                    />}
                />
                {
                    ( errors.selectGender && errors.selectGender.type === "required" )
                    && 
                    <p className="text-danger my-1">Gender Is Required</p>
                }
            </fieldset>

            <fieldset className="mt-4">
                <button className="btn btn-primary btn-lg pt-2 px-3 d-block mx-auto ">Submit</button>
            </fieldset>
        </form>
    </div>
        </div>
    </div>
}

export default SignUp

// , background: `url(${bgImg})noRepeat`