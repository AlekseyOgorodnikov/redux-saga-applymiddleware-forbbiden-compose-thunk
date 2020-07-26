import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/actions'
import { Alert } from './Alert'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
        }
    }
    submitHandler = event => {
        event.preventDefault()
        const { title } = this.state
        //create newpost(id use date.now)
        if (!title.trim()) {
            return this.props.showAlert('Пост не может быть пустым...')
        }
        //create newpost(id use date.now)
        const newPost = {
            title, id: Date.now().toString()
        }
        // console.log(newPost);
        //соединяем через connect и передаем наш пост дальше для dispatch in state
        this.props.createPost(newPost)
        //clear input
        this.setState({ title: '' })
    }
    //обрабатываем input
    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({ ...prev, ...{ [event.target.name]: event.target.value } }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                {this.props.alert && <Alert text={this.props.alert} />}

                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                        placeholder="Введите пост"
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)