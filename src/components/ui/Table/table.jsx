// IMPORT REACT & CSS
import React from 'react'
import './table.css'

// IMPORT DEPENDENCY FOR DECODE HTML5 ENTITIES
import { Html5Entities } from 'html-entities';

const Table = props => {
    return (
        <section className="table">
            <header className="table-title">
                <h2>Browse Questions</h2>
            </header>
            <table className="table-content">
                <thead>
                    <tr>
                        <th className="id">ID<i className="fas fa-sort"></i></th>
                        <th className="category">Category</th>
                        <th className="type">Type</th>
                        <th className="difficulty">Difficulty</th>
                        <th className="question">Question / Statement</th>
                        <th className="created-by">Created By</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((question, idx) =>
                        <tr key={idx}>
                            <td>{idx}</td>
                            <td>{question.category}</td>
                            <td>{question.type === "boolean" ? "True / False" : "Multiple Choice"}</td>
                            <td>{question.difficulty}</td>
                            <td>{Html5Entities.decode(question.question)}</td>
                            <td className="highlight">Sergio</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <nav>
                <ul className="pagination">
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>></li>
                </ul>
            </nav>
        </section>
    )
}

export default Table

