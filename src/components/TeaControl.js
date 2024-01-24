import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import Tea from './Tea';

class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTeaList: [],
      selectedTea: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing:true});
  }

  handleEditingTeaInList = (teaToEdit) => {
    const editedMainTeaList = this.state.mainTeaList
      .filter(tea => tea.id !== this.state.selectedTea.id)
      .concat(teaToEdit);
    this.setState({
      mainTeaList: editedMainTeaList,
      editing: false,
      selectedTea: null
    });
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(newTea)
    this.setState({mainTeaList: newMainTeaList});
    this.setState({formVisibleOnPage: false});
  }

  handleTeaSelection = (id) => {
    const selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    this.setState({selectedTea: selectedTea});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTeaForm tea = {this.state.selectedTea} onEditTea = {this.handleEditingTeaInList} />
      buttonText = "Return to Inventory";
    } else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail tea={this.state.selectedTea}
      onClickingEdit = {this.handleEditClick} /> 
      buttonText = "Return to Inventory";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList} />;
      buttonText = "Return to Inventory";
    } else {
      currentlyVisibleState = <TeaList onTeaSelection={this.handleTeaSelection} teaList={this.state.mainTeaList} />
      buttonText = "Add Tea";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TeaControl;