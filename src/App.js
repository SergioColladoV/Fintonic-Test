// IMPORT REACT & CSS
import React, { Component } from 'react';
import './App.css';

// IMPORT COMPONENTS
import NavBar from './components/ui/NavBar/navBar'
import Table from './components/ui/Table/table'
import Filter from './components/ui/Filter/filter'

// IMPORT SERVICES
import QuestionsServices from './services/questions.services'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      filteredQuestions: [],
      APIresponse: undefined,
      errStatus: false,
      err: undefined
    }
    this.questionsServices = new QuestionsServices()
  }

  getData = () => {
    this.questionsServices.get()
      .then(questions => this.setState({ questions: questions.results, filteredQuestions: questions.results, APIresponse: questions.response_code }))
      .catch(err => this.setState({ err: err, errStatus: true }))
  }

  setFilter = query => {
    const questionsCopy = [...this.state.questions]
    const filteredQuestions = questionsCopy.filter(question => question.question.toLowerCase().includes(query))
    this.setState({ filteredQuestions })
  }

  componentDidMount = () => this.getData()

  render() {
    return (
      <>
        <NavBar />
        <main>
          {this.state.errStatus ?
            (<div class="error">
              <p>API error: {this.state.err}</p>
            </div>)
            :
            (this.state.questions.length ? (
              <>
                <Filter data={this.state.questions} filterResults={this.setFilter} />
                <Table data={this.state.filteredQuestions} />
              </>)
              :
              <div className="spinner-wrapper">
                <div className="spinner">

                </div>
              </div>
            )
          }
        </main>
      </>
    )
  }
}
