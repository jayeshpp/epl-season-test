import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions';


class Home extends React.Component {


  constructor(props) {
    super(props);

    this.teams = [];
  }

  componentDidMount() {
    this.props.fetchTeams();
    this.props.fetchMathes();
  }

  componentWillReceiveProps(nextProps) {
    
    nextProps.clubs.map((value, index, array) => {
      if(value.code) this.teams[value.code] = {
        code: value.code,
        matches: 0,
        won: 0,
        lost: 0,
        ties: 0,
        goalsFor: 0,
        goalsAgainst: 0
      }
    })    
    
    const _this = this;
    nextProps.rounds.map((value, index, array) => {

      value.matches.map((value, index, array) => {
        
        //Total matches
        if(_this.teams[value.team1.code]) _this.teams[value.team1.code].matches = _this.teams[value.team1.code].matches + 1; 
        if(_this.teams[value.team2.code]) _this.teams[value.team2.code].matches = _this.teams[value.team2.code].matches + 1; 
        
        //Wins - Lost - Ties
        if(value.score1 > value.score2) {
          _this.teams[value.team1.code].won = _this.teams[value.team1.code].won + 1; 
          _this.teams[value.team2.code].lost = _this.teams[value.team2.code].lost + 1; 
        }

        if(value.score1 < value.score2){
          _this.teams[value.team1.code].lost = _this.teams[value.team2.code].lost + 1; 
          _this.teams[value.team2.code].won = _this.teams[value.team2.code].won + 1; 
        }

        if(value.score1 === value.score2) {
          _this.teams[value.team1.code].ties = _this.teams[value.team1.code].ties + 1; 
          _this.teams[value.team2.code].ties = _this.teams[value.team2.code].ties + 1; 
        }

      })

    })


    console.log(this.teams);
    
  }

  render() {

    return (
      <div>
        test
      </div> 
    )
  }
}

const mapStateToProps = (store) => ({
  name: store.matches.name,
  rounds: store.matches.rounds,
  clubs: store.teams.clubs
})

const mapDispatchToProps = dispatch => bindActionCreators(actions,dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
