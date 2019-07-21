import React, {Component} from 'react';
import { connect } from 'react-redux';
import NoteList from './NoteList';
import { noteSelectors, noteOperations } from '../../modules/notes';


class NoteListContainer extends Component{
  componentDidMount(){
    this.props.fetchNotes()
  }

  render(){
    return <NoteList {...this.props}/>
  }
}


const mapStateToProps = state => ({notes : noteSelectors.getVibleNotes(state)});

const mapDispatchToProps = {
  deleteNote: noteOperations.deleteNote,
  toggleNote: noteOperations.toggleNote,
  fetchNotes: noteOperations.fetchNotes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteListContainer);
