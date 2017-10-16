import React from 'react';
import { connect } from 'react-redux';
import Import from './import';
import Code from './code';

export function Store() {
  return (
      <div className="block store">
        <h3>Store</h3>
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