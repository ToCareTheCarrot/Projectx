import React from 'react';

export class AddEditForm extends React.Component{
  state = {
    addText: "",
    editText: this.props.projectText
  };

  // text: this.props.projectText

  render(){
    if (this.props.onEdit){
      return (
        <form onSubmit={e => e.preventDefault()} className="form-add-edit">
          <label>Edit a Project</label>
          <div>
            <input 
              type="text"
              value={this.state.editText}
              onChange={e => {
                this.setState({
                  editText: e.target.value
                })
              }}
            />
            <button
              onClick={() => { //теперь на сабмит выбирает cancel,а не edit, но на клик по кнопке edit - всё правильно
                if(this.state.editText && this.state.editText.trim()){
                  this.props.onSave(this.state.editText);
                  this.setState({ editText: "" });
                }
              }}
            >
              Submit
            </button>
            <button onClick={() => this.props.onCancel()}>Cancel</button>
          </div>
        </form>
      );
    }

    return (
      <form onSubmit={e => e.preventDefault()} className="form-add-edit">
        <div>
          <label>Add a Project</label>
          <button 
            onClick={() => this.props.onCancel()}
            className="form-add-edit-cancel-btn"
          >Cancel</button>
        </div>
        <div>
          <input 
            type="text"
            value={this.state.addText}
            onChange={e => {
              this.setState({
                addText: e.target.value
              })
            }}
          />
          <button
            onClick={() => {
              if(this.state.addText && this.state.addText.trim()){
                this.props.toAdd(this.state.addText);
                this.setState({ addText: "" });
              }
            }}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}