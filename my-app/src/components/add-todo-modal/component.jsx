import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

class AddModal extends Component {
    onClose = () => {
        const { changeIsOpen } = this.props;

        changeIsOpen(false);
    };

    generateUUID = () => {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };

    onAddTodo = () => {
        const { addTodo, data } = this.props;
        data && addTodo({ id: this.generateUUID(), date: moment.utc().format('DD/MM/YY HH:MM:SS'), data: data} );
        data && this.onClose();
    };

    onChange = (e) => {
        const { onChange } =this.props;

        onChange(e.target.value)
    };

    render() {
        const {
            isOpen
        } = this.props;

        return isOpen ? ReactDOM.createPortal(
            <div className="modal-container">
                <div className="modal-container__close" onClick={this.onClose}>CLOSE</div>
                <textarea className="modal-container__textarea" onChange={this.onChange} />
                <span className="modal-container__add-button" onClick={this.onAddTodo}>ADD</span>
            </div>, document.getElementById('modal-container')
        ) : null
    }
}

export default AddModal