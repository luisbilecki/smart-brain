import React from 'react';

import { generateEmoji } from '../../api/rank';

class Rank extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emoji: ''
    }
  }

  componentDidMount() {
    this.getEmoji(this.props.entries);
  }

  componentWillUpdate(prevProps, prevState) {
    if (prevProps.entries === this.props.entries
      && prevProps.name === this.props.name) {
      return null
    }

    this.getEmoji(this.props.entries);
  }

  getEmoji = (entries) => {
    generateEmoji(entries)
      .then(res => {
        this.setState({ emoji: res.emoji });
      })
      .catch(console.log);
  }

  render() {
    const { name, entries } = this.props;
    const { emoji } = this.state;

    return (
      <div>
        <div className='white f3'>
          {`${name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {entries}
        </div>
        {
          emoji &&
          <div className='white f3'>
            {`Rank Badge: ${emoji}`}
          </div>
        }
      </div>
    );
  }
}

export default Rank;
