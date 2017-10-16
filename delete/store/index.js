import React from 'react';
import { connect } from 'react-redux';
import Import from './import';
import Code from './code';

export function Store(props) {
  console.log('reduxStore',props)
  return (
      <div className="block store">
        <div className="folder-header"><h3>Store</h3></div>
        <Import />
        <Code />
      </div>
  )
}

export const mapStateToProps = state => ({
  react: state.react,
  redux: state.redux
})

export default connect(mapStateToProps)(Store)