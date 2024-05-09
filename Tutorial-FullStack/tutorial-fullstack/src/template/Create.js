import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert/dist/sweetalert.min.js";

export const Create = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const handlePost = async (values) => {
        try {
            await axios.post("http://localhost:8080/api", values)
            navigate("/")

            swal("Good job!", "You clicked the button!", "success");
        } catch (error) {
            throw error
        }
    }

    return (
        <div>
            <h1 className="text-center text-uppercase text-secondary mb-3">New Student</h1>
            <form action="#" className="row" onSubmit={handleSubmit(handlePost)}>
                {
                    (errors.fullName || errors.age || errors.gender) &&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Warning!</strong>
                        Please fill out the form below.
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close">
                        </button>
                    </div>
                }
                <div className="col-6">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" {...register("fullName", {required: true})} />
                        <label htmlFor="floatingInput">Full name</label>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" {...register("age", {required: true, min: 17})} />
                        <label htmlFor="floatingInput">Age</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating mb-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="male"
                                   value="true" {...register("gender", {required: true})} />
                            <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" id="female"
                                   value="false" {...register("gender", {required: true})} />
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </div>
    )
}