import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export const Home = () => {
    const [students, setStudents] = useState([]);
    const loadStudents = async () => {
        const response = await axios.get("http://localhost:8080/api")
        setStudents(response.data)
    }
    useEffect(() => {
        loadStudents()
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/${id}`)
        loadStudents()
    }
    return (
        <div>
            <h1 className="text-center text-uppercase text-secondary">Home page</h1>
            <table className="table">
                <thead>
                <tr className="text-center">
                    <th scope="col">No</th>
                    <th scope="col">Full name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((student, index) => (
                        <tr className="text-center" key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{student.fullName}</td>
                            <td>{student.age}</td>
                            <td>{student.gender ? "Male" : "Female"}</td>
                            <td>
                                <button onClick={() => handleDelete(student.id)} className="btn btn-outline-danger m-2">Delete</button>
                                <Link to={`/edit/${student.id}`} className="btn btn-outline-info">Edit</Link>
                            </td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}